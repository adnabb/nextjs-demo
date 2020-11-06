import 'reflect-metadata';
import { createConnection, getConnectionManager } from "typeorm";
import config from '../ormconfig.json'
import User from '../src/entity/User'
import Post from '../src/entity/Post'
import Comment from '../src/entity/Comment'

const _createConnection = async () => {
  // @ts-ignore
  return createConnection({
      ...config,
      entities: [User, Post, Comment] 
    })

}
export default async function getDatabaseConnection() {
  const connectionManager = getConnectionManager()
  const reusedConnection = connectionManager.has('default') && connectionManager.get('default')
  if (reusedConnection && reusedConnection.isConnected) await reusedConnection.close()
  return _createConnection()
}