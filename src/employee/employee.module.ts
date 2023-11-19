import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { EmployeeController } from './controllers/employee.controller';
import { EmployeeService } from './service/employee.service';
import { Employee } from './models/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  controllers: [EmployeeController],
  providers: [EmployeeService],
  
})
export class EmployeeModule {}
