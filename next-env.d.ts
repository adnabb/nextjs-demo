/// <reference types="next" />
/// <reference types="next/types/global" />

type Post = {
  id: string
  title: string
  date: string
  content: string
}

type Posts = Array<Post>
