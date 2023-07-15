import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from 'src/entities/student.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dtos/login.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepo: Repository<StudentEntity>,
  ) {}

  findOne(username: string): Promise<StudentEntity | null> {
    return this.studentRepo.findOneBy({ username });
  }

  async login(loginDto: LoginDto) {
    const student = await this.findOne(loginDto.username);
    if (student?.password !== loginDto.password) {
      throw new UnauthorizedException();
    }
    return student;
  }
}
