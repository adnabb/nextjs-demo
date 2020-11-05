import { createConnection, getConnectionManager } from "typeorm";

export default async() => {
  const connectionManager = getConnectionManager()
  const reusedConnection = connectionManager.has('default') && connectionManager.get('default')
  if (reusedConnection){
    console.log('reuse')
    if (!reusedConnection.isConnected) {
      console.log('connect')
      await reusedConnection.connect()
    }
    return reusedConnection
  } else {
    console.log('create')
    const connection = await createConnection()
    return connection 
  }
 }