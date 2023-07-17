import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import SemesterEntity from 'src/entities/semester.entity';
import { SubjectEntity } from 'src/entities/subject.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(SubjectEntity)
    private readonly subjectRepo: Repository<SubjectEntity>,
    @InjectRepository(SemesterEntity)
    private readonly semesterRepo: Repository<SemesterEntity>,
  ) {}

  async getSubjectsByStudentId(sid: number) {
    const subjects = await this.semesterRepo.findOne({
      where: { id: sid },
      relations: ['subjects'],
    });
    console.log(subjects?.subjects);
    return subjects;
  }
}
