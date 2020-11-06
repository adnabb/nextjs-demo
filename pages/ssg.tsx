import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getPosts } from '../lib/posts'
import styles from '../styles/Home.module.css'

type Props = {
  posts: Posts
}

export const Home: NextPage<Props> = (props) => {
  const {posts} = props
  return (
    <main className={styles.main}>
      <Head>
        <title>我的博客</title>
      </Head>
      <h1>ssg - 我的博客</h1>
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

export const getStaticProps: GetStaticProps = async () => {

  const files = getPosts()

  return {
    props: { posts: files }
  }
}

export default Home
