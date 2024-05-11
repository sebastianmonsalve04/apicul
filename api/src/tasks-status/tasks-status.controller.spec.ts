import { Test, TestingModule } from '@nestjs/testing';
import { TasksStatusController } from './tasks-status.controller';
import { TasksStatusService } from './tasks-status.service';

describe('TasksStatusController', () => {
  let controller: TasksStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksStatusController],
      providers: [TasksStatusService],
    }).compile();

    controller = module.get<TasksStatusController>(TasksStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
