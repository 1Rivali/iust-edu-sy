import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { StudentEntity } from './student.entity';
import SemesterEntity from './semester.entity';

@Entity()
export class SubjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column()
  credits: number;

  @Column()
  mark: string;

  @Column('decimal', { precision: 6, scale: 2 })
  digit_mark: number;

  @Column({ default: true })
  is_passed: boolean;

  @Column()
  status: string;

  @Column({ default: false })
  is_repeated: boolean;

  @Column({ default: false })
  prohibition: boolean;

  @Column()
  activity: string;

  @Column({ default: false })
  withdrawal: boolean;

  @Column({ default: false })
  failure: boolean;

  @Column()
  room: string;

  @Column()
  time: string;

  @ManyToOne(() => StudentEntity, (student) => student.subjects)
  student: StudentEntity;

  @ManyToMany(() => SemesterEntity, (semester) => semester.subjects)
  semesters: SemesterEntity[];
}
