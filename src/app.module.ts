import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './entities/student.entity';
import { SubjectEntity } from './entities/subject.entity';
import { StudentModule } from './student/student.module';
import { SubjectModule } from './subject/subject.module';
import SemesterEntity from './entities/semester.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'MYSQL5044.site4now.net',
      username: 'aa57c3_iustedu',
      password: '3312082fady',
      database: 'db_aa57c3_iustedu',
      entities: [StudentEntity, SubjectEntity, SemesterEntity],
      synchronize: true,
    }),
    StudentModule,
    SubjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
