import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { StudentService } from './student.service';
import SemesterEntity from 'src/entities/semester.entity';

@Controller('students')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    const student = await this.studentService.login(loginDto);
    return student;
  }
}
