export async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const result = await res.json();
  return result as IUser[];
}

export function getHashMapUsers(users: IUser[]) {
  const map = new Map<number, IUser>();
  users.map(user => map.set(user.id, user));
  return map;
}

export interface IUser {
  id: number,
  name: string,
}