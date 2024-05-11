import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TaskCategoriesModule } from './task-categories/task-categories.module';
import { TasksStatusModule } from './tasks-status/tasks-status.module';
import { TaskCategory } from './task-categories/entities/task-category.entity';
import { TasksStatus } from './tasks-status/entities/tasks-status.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'apicul',
    entities: [User, TaskCategory, TasksStatus],
    synchronize: true,
  }), UserModule, TaskCategoriesModule, TasksStatusModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
