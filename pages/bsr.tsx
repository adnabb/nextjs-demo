import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getPosts } from '../lib/posts'
import styles from '../styles/Home.module.css'

export const Home: NextPage = () => {
  const [posts, setPosts] = useState<Array<Post>>([])
  useEffect(() => {
    
  }, [])
  return (
    <main className={styles.main}>
      <Head>
        <title>我的博客</title>
      </Head>
      <h1>BSR - 我的博客</h1>
      {
        posts.map(file => (
          <div key={file.id}>
            <Link href="/posts/[id]" as={`/posts/${file.id}`}>
              <a>
                <h2>{file.title}</h2>
                <p>{file.date}</p>
              </a>
            </Link>
          </div>
        ))
      }
    </main>
  )
}

export default Home
