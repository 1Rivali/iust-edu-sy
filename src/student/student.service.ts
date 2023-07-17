import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from 'src/entities/student.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dtos/login.dto';
import SemesterEntity from 'src/entities/semester.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepo: Repository<StudentEntity>,
    @InjectRepository(SemesterEntity)
    private semesterRepo: Repository<SemesterEntity>,
  ) {}

  async findOne(username: string): Promise<StudentEntity | null> {
    const student = await this.studentRepo.findOne({
      where: { username },
      relations: ['semesters'],
    });
    return student;
  }

  async login(loginDto: LoginDto) {
    const student = await this.findOne(loginDto.username);
    if (student?.password !== loginDto.password) {
      throw new UnauthorizedException();
    }
    return student;
  }

  async addSemesters(semesters: SemesterEntity[]) {
    await this.studentRepo.update(
      { username: 'fa2110663' },
      { semesters: semesters },
    );
  }
}
