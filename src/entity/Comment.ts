import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {Post} from './Post'
import {User} from './User'

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column('text')
  content: string

  @CreateDateColumn({type: 'timestamp without time zone'})
  created_at: Date

  @UpdateDateColumn({type: 'timestamp without time zone'})
  updated_at: Date

  @ManyToOne(type => Post, post => post.comments) 
  post: Post
 
  @ManyToOne(type => User, user => user.comments) 
  user: User
 }
