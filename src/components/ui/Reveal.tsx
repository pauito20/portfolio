import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Curva expo-out: arranque rápido, frenada larga. Es la firma del scroll de
 * apple.com — mucho más "fluida" que un simple ease-out.
 */
export const EASE_REVEAL = [0.16, 1, 0.3, 1] as const;

export type RevealVariant = "up" | "fade" | "scale";

function buildVariants(variant: RevealVariant, distance: number): Variants {
  return {
    hidden: {
      opacity: 0,
      y: variant === "up" ? distance : 0,
      scale: variant === "scale" ? 0.96 : 1,
    },
    visible: { opacity: 1, y: 0, scale: 1 },
  };
}

/**
 * Animación de entrada al hacer scroll. `MotionConfig reducedMotion="user"` en
 * la raíz de la app ya neutraliza el desplazamiento/escala cuando el usuario
 * prefiere movimiento reducido (queda solo el fade).
 *
 * Con `stagger`, los `<Reveal.Item>` hijos entran escalonados en vez de a la
 * vez — usar para listas (tarjetas de proyecto, skills).
 */
export function Reveal({
  children,
  delay = 0,
  className,
  variant = "up",
  distance = 32,
  duration = 0.8,
  amount = 0.25,
  stagger,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
  distance?: number;
  duration?: number;
  amount?: number;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={buildVariants(variant, distance)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{
        duration,
        delay,
        ease: EASE_REVEAL,
        ...(stagger ? { staggerChildren: stagger, delayChildren: delay } : {}),
      }}
    >
      {children}
    </motion.div>
  );
}

/** Hijo de un `<Reveal stagger>`: hereda los estados hidden/visible del padre. */
function RevealItem({
  children,
  className,
  distance = 24,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={buildVariants("up", distance)}
      transition={{ duration: 0.7, ease: EASE_REVEAL }}
    >
      {children}
    </motion.div>
  );
}

Reveal.Item = RevealItem;
