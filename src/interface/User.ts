export interface User {
  userId: number;
  id: number;
  name: string;
  users: User[] | null;
}
