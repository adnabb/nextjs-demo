import 'reflect-metadata';
import {createConnection, getManager} from 'typeorm'
import {Post} from './entity/post' // 注意这里的post路径是小写


createConnection().then(async () => {

    console.log('恭喜你，连接成功！')
    const entityManager = getManager() // you can also get it via getConnection().manager
    const post = await entityManager.create(Post, {
      title: 'test',
      content: 'hi, this is my first file'
    })
    await entityManager.save(post);
    console.log('恭喜你，新增成功！')

}).catch(error => console.log(error));
