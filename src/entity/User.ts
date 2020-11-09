import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, Index, BeforeInsert } from 'typeorm';
import _ from 'lodash';
import { Post } from './Post';
import { Comment } from './Comment'
import getDatabaseConnection from '../../lib/getDatabaseConnection';
import md5 from 'md5';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Index({ unique: true })
  @Column('varchar')
  username: string

  @Column('varchar')
  password: string

  @CreateDateColumn({ type: 'timestamp without time zone' })
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamp without time zone' })
  updatedAt: Date

  @OneToMany(type => Post, post => post.author)
  posts: Post[]

  @OneToMany(type => Comment, comment => comment.user)
  comments: Comment[]

  @BeforeInsert()
  generatePassword() {
    this.password = md5(this.password_input)
  }

  errors = {
    username: [] as string[],
    password: [] as string[],
    passwordConfirm: [] as string[]
  }
  password_input: string
  passwordConfirm_input: string

  async validate() {
    const foundIfExist = async () => { return (await getDatabaseConnection()).manager.findOne(User, { username: this.username }) }
    if (!(this.username)) {
      this.errors.username.push('用户名不能为空')
    } else if (!(/\w+/.test(this.username))) {
      this.errors.username.push('用户名不合法')
    } else if (await foundIfExist()) {
      this.errors.username.push('用户名重复')
    } else if (!(this.password_input)) {
      this.errors.password.push('密码不能为空')
    } else if (this.passwordConfirm_input !== this.password_input) {
      this.errors.passwordConfirm.push('两次密码不相同')
    }
  }

  hasError() {
    console.log('errors', this.errors)
    return !!(Object.values(this.errors).find(v => v.length > 0))
  }

  toJSON() {
    return _.omit(this, ['password', 'password_input', 'passwordConfirm_input'])
  }
}

export default User