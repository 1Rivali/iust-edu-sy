import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from 'src/entities/student.entity';
import { StudentController } from './student.controller';
import SemesterEntity from 'src/entities/semester.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity])],
  providers: [StudentService],
  controllers: [StudentController],
})
export class StudentModule {}
