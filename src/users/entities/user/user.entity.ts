import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { LogUser } from '../loguser/loguser.entity'
@Entity()
export class User {
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

 
  @OneToOne(type => LogUser, loguser => loguser.id)
  @JoinColumn()
  loguser: User;
}
