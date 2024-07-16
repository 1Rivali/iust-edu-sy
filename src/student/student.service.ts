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
    console.log(student);
    if (student?.password !== loginDto.password) {
      throw new UnauthorizedException();
    }
    console.log(student);
    return student;
  }
}
