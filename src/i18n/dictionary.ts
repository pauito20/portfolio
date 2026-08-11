import type { es } from "./es";

export type Dict = typeof es;

type Join<K, P> = K extends string
  ? P extends string
    ? `${K}${"" extends P ? "" : "."}${P}`
    : never
  : never;

type Paths<T, D extends number = 4> = [D] extends [never]
  ? never
  : T extends string
    ? ""
    : {
        [K in Extract<keyof T, string>]: Join<K, Paths<T[K], Prev[D]>>;
      }[Extract<keyof T, string>];

type Prev = [never, 0, 1, 2, 3];

export type DictPath = Paths<Dict>;
