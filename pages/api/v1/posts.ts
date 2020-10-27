import { IncomingMessage, ServerResponse } from 'http'
import { getPosts } from '../../../lib/posts'

export default (req: IncomingMessage, res: ServerResponse) => {
  if (req.method === 'GET') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(getPosts()))
  }
}
