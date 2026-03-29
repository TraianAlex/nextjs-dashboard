/**
 * Stabilizes TypeScript resolution for the `postgres` package (`export =` + `exports`
 * map) so the language service matches `tsc` / Next. Runtime is unchanged.
 */
declare module 'postgres' {
  const postgres: typeof import('../node_modules/postgres/types/index');
  export default postgres;
}
