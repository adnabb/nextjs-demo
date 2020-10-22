import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import Head from 'next/head'
import { getPost, getPostIds } from '../../lib/posts'
import styles from '../../styles/Posts.[id].module.css'

type Props = {
  post: Post
}

export const Post: NextPage<Props> = ({post}) => {
  const { title, date, content } = post
  const onClick = () => { window.history.back() }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={styles.main}>
        <button onClick={onClick}>返回上一页</button>
        <h1>{title}</h1>
        <p>{date}</p>
        <article>
          {content}
        </article>
      </main>
    </>
  )
}

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPostIds().map((id) => ({ params: { id } }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const id = params?.id
  let file: Post

  if (id && typeof id === 'string') {
    file = getPost(id)
    return { props: { post: file } }
  }

  return { props: { post: {} } }
}