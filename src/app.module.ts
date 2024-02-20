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
      // host: 'localhost',
      // username: 'root',
      // password: '',
      // database: 'iustedu',
      // host: 'ep-young-silence-a5cic3mh.us-east-2.aws.neon.tech',
      // username: '1Rivali',
      // password: 'rb62zWMZsSHl',
      // database: 'iustedu',
      host: 'sql.freedb.tech',
      // port: 3306,
      username: 'freedb_iusteduroot',
      password: 'K@65GF6GGFkJX6N',
      database: 'freedb_iustedu',
      entities: [StudentEntity, SubjectEntity, SemesterEntity],
      synchronize: true,
      ssl: false,
    }),
    StudentModule,
    SubjectModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//// Correct
// host: 'ep-young-silence-a5cic3mh.us-east-2.aws.neon.tech',
// username: '1Rivali',
// password: 'rb62zWMZsSHl',
// database: 'iustedu',
// entities: [StudentEntity, SubjectEntity, SemesterEntity],
// synchronize: true,
// ssl: true,
