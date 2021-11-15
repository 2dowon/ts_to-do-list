export interface Todo {
  id: string;
  fields: { Done: boolean | undefined; Name: string };
  createdTime: string;
}
