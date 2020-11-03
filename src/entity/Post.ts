import {Column, Entity, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn} from 'typeorm';
import {Comment} from './Comment'
import {User} from './User'

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column('varchar')
  title: string

  @Column('text')
  content: string

  @CreateDateColumn({type: 'timestamp without time zone'})
  created_at: Date

  @UpdateDateColumn({type: 'timestamp without time zone'})
  updated_at: Date

  @OneToMany(type => Comment, comment => comment.post)
  comments: Comment[]
 
  @ManyToOne(type => User, user => user.posts)
  auther: User
}
