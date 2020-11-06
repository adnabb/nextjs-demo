/// <reference types="next" />
/// <reference types="next/types/global" />

type Post = {
  id: number
  title: string
  content: string
  authorId?: number
  createdAt?: string
  updatedAt?: string
}

type Posts = Array<Post>
