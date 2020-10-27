import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import {usePosts} from '../hooks/usePosts'

export const Home: NextPage = () => {
  const posts = usePosts().posts

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
