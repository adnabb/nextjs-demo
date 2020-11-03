import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany} from 'typeorm';
import {Post} from './Post';
import {Comment} from './Comment'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column('varchar')
  username: string

  @Column('varchar')
  password: string

  @CreateDateColumn({type: 'timestamp without time zone'})
  created_at: Date

  @UpdateDateColumn({type: 'timestamp without time zone'})
  updated_at: Date

  @OneToMany(type => Post, post => post.auther)
  posts: Post[]

  @OneToMany(type => Comment, comment => comment.user)
  comments: Comment[]
}
