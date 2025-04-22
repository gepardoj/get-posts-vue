import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { type IPostWithAuthor, type IPost } from "./posts";
import { type IUser } from "./users";
import { useQuery } from "@tanstack/vue-query";
import axios from "axios";

export const usePostsStore = defineStore("posts", () => {

  const searchStr = ref("")
  const setSearchStr = (str: string) => searchStr.value = str.toLowerCase()

  const { data: users, isLoading: areUsersLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users').then(_ => _.data),
  })

  const { data: posts, isLoading: arePostsLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () => axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts').then(_ => _.data),
  })

  const postsWithAuthors = computed<IPostWithAuthor[]>(() => {
    if (!posts.value || !users.value) return []
    const userMap = users.value.reduce((map: Record<number, IUser>, user) => ({ ...map, [user.id]: user }), {})
    const postsWithAuthors = posts.value.map(post => ({ ...post, author: userMap[post.userId].name }))
    if (searchStr) return postsWithAuthors.filter(post => post.author.toLowerCase().includes(searchStr.value))
    return postsWithAuthors
  })

  return { setSearchStr, users, posts, postsWithAuthors, isLoading: areUsersLoading || arePostsLoading }
})