import {Column, Entity, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, JoinColumn} from 'typeorm';
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
  createdAt: Date

  @UpdateDateColumn({type: 'timestamp without time zone'})
  updatedAt: Date

  @OneToMany(type => Comment, comment => comment.post)
  comments: Comment[]
 
  @ManyToOne(type => User, user => user.posts)
  author: User
}

export default Post