/**
 * sometimes we npm install a package and don't come with types
 * for any reason, we can do the following:
 */

declare module "some-sql-library" {
  export type QueryResult = {
    rows: unknown[];
    count: number;
  };
  export function query(query: string): QueryResult;
}

declare module "date" {
  let format: (date: Date) => string;
  export default format;
}
