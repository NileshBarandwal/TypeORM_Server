import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
