export interface Todo {
  id: number;
  fields: { Done: boolean | undefined; Name: string };
}
