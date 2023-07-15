import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    const student = await this.studentService.login(loginDto);
    const { password, ...rest } = student;
    return rest;
  }
}
