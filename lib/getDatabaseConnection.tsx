import { createConnection, getConnectionManager } from "typeorm";

export default async function getDatabaseConnection() {
  const connectionManager = getConnectionManager()
  const reusedConnection = connectionManager.has('default') && connectionManager.get('default')
  if (reusedConnection){
    if (!reusedConnection.isConnected) { await reusedConnection.connect() }
    return reusedConnection
  } else {
    return createConnection()
  }
 }