import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './entities/student.entity';
import { SubjectEntity } from './entities/subject.entity';
import { StudentModule } from './student/student.module';
import { SubjectModule } from './subject/subject.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'MYSQL8002.site4now.net',
      username: 'a9c403_iustedu',
      password: '3312082fady',
      database: 'db_a9c403_iustedu',
      entities: [StudentEntity, SubjectEntity],
      synchronize: true,
    }),
    StudentModule,
    SubjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
