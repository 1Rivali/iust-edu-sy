import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SubjectEntity } from './subject.entity';
import { StudentEntity } from './student.entity';
@Entity()
class SemesterEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => SubjectEntity)
  @JoinTable()
  subjects: SubjectEntity[];

  @ManyToMany(() => StudentEntity, (student) => student.semesters)
  students: StudentEntity[];
}

export default SemesterEntity;
