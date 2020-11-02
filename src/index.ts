import 'reflect-metadata';
import {createConnection} from 'typeorm';

createConnection().then(async connection => {

    console.log('恭喜你，连接成功！')

}).catch(error => console.log(error));
