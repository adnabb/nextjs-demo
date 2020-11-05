import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import getDatabaseConnection from '../lib/getDatabaseConnection'
import { getPosts } from '../lib/posts'
import styles from '../styles/Home.module.css'

type Props = {
  posts: Post[]
  host: string
}

export const Home: NextPage<Props> = (props) => {
  const {posts, host} = props
  return (
    <main className={styles.main}>
      <Head>
        <title>我的博客</title>
      </Head>
      <h1>SSR - 我的博客</h1>
      <p>当前地址：{host}</p>
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const host = context.req.headers.host
  const files = getPosts()

  const connection = await getDatabaseConnection()
  const test = await connection.query(`SELECT * FROM USERS`)
  console.log(test);


  return {
    props: { posts: files, host: host }
  }
}

export default Home
