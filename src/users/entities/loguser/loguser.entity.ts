import { Column, Entity, PrimaryGeneratedColumn, OneToOne , JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class LogUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column({type:"int"})
  Phone: number;

  @Column()
  email: string;

  @Column()
  meet: string;

  @Column()
  date: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToOne(type => User, user => user.id)
  @JoinColumn()
  user: User;

}
