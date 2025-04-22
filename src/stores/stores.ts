import { getPosts } from "./posts";
import { getUsers, type IUser } from "./users";

export async function getData() {
  const [users, posts] = await Promise.all([getUsers(), getPosts()]);
  const userMap = users.reduce((map: Record<number, IUser>, user) => ({ ...map, [user.id]: user }), {});
  const updPosts = posts.map(post => ({ ...post, author: userMap[post.userId].name }))
  return { users, posts: updPosts };
}