import { Controller, Get, Param } from '@nestjs/common';
import { SubjectService } from './subject.service';

@Controller('subjects')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get('/semester/:sid')
  async getAllByStudentId(@Param('sid') sid: number) {
    return await this.subjectService.getSubjectsByStudentId(sid);
  }
}
