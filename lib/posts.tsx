import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

const dirPath = path.join(process.cwd(), 'posts')
const fileNames = fs.readdirSync(dirPath)

const replacePostSuffix = (path: string) => { return path.replace(/\.md/, '') }
const matterFile = (file: string) => {
  const { data: {title, date}, content } = matter(file)

  return {
    title,
    date: date.toString(),
    content
  }
}

export const getPosts = () => {
  return fileNames.map((fileName) => {
    const filePath = path.join(dirPath, fileName)
    const file = fs.readFileSync(filePath, 'utf-8')

    return {
      id: replacePostSuffix(fileName),
      ...matterFile(file)
    }
  })
}

export const getPost = (id: string) => {
  const filePath = path.join(dirPath, `${id}.md`)
  const file = fs.readFileSync(filePath, 'utf-8')
  return {
    id,
    ...matterFile(file)
  }
}

export const getPostIds = () => {
  return fileNames.map((fileName) => { return replacePostSuffix(fileName) })
}