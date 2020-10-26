import { useEffect, useState } from 'react'
import axios from 'axios'

export const usePosts = () => {
  const [posts, setPosts] = useState<Array<Post>>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isEmpty, setIsEmpty] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    axios.get('api/v1/posts').then((res) => {
      setPosts(res.data)
      setIsLoading(false)
      setIsEmpty(res.data.length <= 0)
    }, () => {
      setIsLoading(false)
    })
  }, [])

  return {posts, setPosts, isLoading, setIsLoading, isEmpty, setIsEmpty }
}