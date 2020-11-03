import 'reflect-metadata';
import { createConnection } from 'typeorm'
import { Post } from './entity/Post'
import { User } from './entity/User';
import { Comment } from './entity/Comment';


createConnection().then(async (connection) => {

  console.log('恭喜你，连接成功！')

  const {manager} = connection

  const u1 = new User()
  u1.username = 'vivi'
  u1.password = '123456'
  await manager.save(u1)
  console.info('u1 保存成功')

  const p1 = new Post()
  p1.title = 'haha'
  p1.content = 'hhhhhhhhhhhhhhhhhhhhhhhhhhhh'
  p1.auther = u1
  await manager.save(p1)
  console.info('p1 保存成功')


  const c1 = new Comment()
  c1.content = 'good'
  c1.user = u1
  c1.post = p1
  await manager.save(c1)

  console.log('恭喜你，新增成功！')
  console.info('c1 保存成功')

  connection.close()

}).catch(error => console.log(error));
