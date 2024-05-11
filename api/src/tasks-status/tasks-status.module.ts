import { Module } from '@nestjs/common';
import { TasksStatusService } from './tasks-status.service';
import { TasksStatusController } from './tasks-status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksStatus } from './entities/tasks-status.entity';
@Module({
  imports: [TypeOrmModule.forFeature([TasksStatus])],
  controllers: [TasksStatusController],
  providers: [TasksStatusService],
})
export class TasksStatusModule {}
