/**
 * Stabilizes TS resolution for `clsx` (conditional `exports` + CJS/ESM typings).
 * Matches `clsx.d.mts`: default and named `clsx` export.
 */
declare module 'clsx' {
  export type ClassValue =
    | ClassArray
    | ClassDictionary
    | string
    | number
    | bigint
    | null
    | boolean
    | undefined;
  export type ClassDictionary = Record<string, unknown>;
  export type ClassArray = ClassValue[];

  export function clsx(...inputs: ClassValue[]): string;
  export default clsx;
}
