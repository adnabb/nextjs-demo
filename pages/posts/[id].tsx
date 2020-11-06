import {GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import getDatabaseConnection from '../../lib/getDatabaseConnection'
import styles from '../../styles/Posts.[id].module.css'

type Prop = {
  post: Post
}
export const Post: NextPage<Prop> = ({post}) => {
  const { title, createdAt, content } = post
  const onClick = () => { window.history.back() }
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={styles.main}>
        <button onClick={onClick}>返回上一页</button>
        <h1>{title}</h1>
        <p>{createdAt}</p>
        <article>
          {content}
        </article>
      </main>
    </>
  )
}

export default Post;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {id} = context.query
  const connection = await getDatabaseConnection()
  const post = await connection.query(`SELECT * FROM POSTS WHERE ID = ${id}`)

  return {
    props: {
      post: JSON.parse(JSON.stringify(post[0]))
    }
  }
}