import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubjectEntity } from 'src/entities/subject.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(SubjectEntity)
    private readonly subjectRepo: Repository<SubjectEntity>,
  ) {}

  async getSubjectsByStudentId(sid: number) {
    const subjects = await this.subjectRepo.find({
      where: { student: { id: sid } },
    });
    return subjects;
  }
}
