import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Animación de entrada al hacer scroll. `MotionConfig reducedMotion="user"` en la raíz
 * de la app ya neutraliza esto cuando el usuario prefiere movimiento reducido.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
