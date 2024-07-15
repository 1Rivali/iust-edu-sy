import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectEntity } from 'src/entities/subject.entity';
import SemesterEntity from 'src/entities/semester.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SubjectEntity, SemesterEntity])],
  providers: [SubjectService],
  controllers: [SubjectController],
})
export class SubjectModule {}
