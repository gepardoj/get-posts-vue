export interface IPost {
  id: number,
  title: string,
  body: string,
  userId: number,
}

export interface IPostWithAuthor extends IPost {
  author: string, // evaluated prop from userId
}