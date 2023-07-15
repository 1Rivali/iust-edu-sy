import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SubjectEntity } from './subject.entity';

@Entity()
export class StudentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;
  @Column()
  password: string;

  @Column('decimal', { precision: 6, scale: 2 })
  gpa: number;

  @Column()
  faculty: string;

  @Column()
  specialization: string;

  @Column()
  status: string;

  @Column({ default: null })
  supervisor: string;

  @OneToMany(() => SubjectEntity, (subject) => subject.student)
  subjects: SubjectEntity[];
}
