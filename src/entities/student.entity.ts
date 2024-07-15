import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { SubjectEntity } from './subject.entity';
import SemesterEntity from './semester.entity';

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

  @Column({ default: 0 })
  planProgress: number;

  @Column({ default: 0 })
  level: number;

  @Column()
  balance: number;

  @OneToMany(() => SubjectEntity, (subject) => subject.student)
  subjects: SubjectEntity[];

  @ManyToMany(() => SemesterEntity, (semester) => semester.students)
  @JoinTable()
  semesters: SemesterEntity[];
}
