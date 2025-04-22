export async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const result = await res.json();
  return result as IPost[];
}

export interface IPost {
  id: number,
  title: string,
  body: string,
  userId: number,
  author: string, // evaluated prop from userId
}