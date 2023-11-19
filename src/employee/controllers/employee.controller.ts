import { Controller, Post, Get, Param, Body } from '@nestjs/common';

import { Observable } from 'rxjs';
import { Employee } from '../models/employee.entity';
import { EmployeeService } from '../service/employee.service';


@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}
  @Post('/activate-deactivate')
  activateDeactivateEmployee(@Body() body: { employeeId: string }): Observable<Employee> {
    const { employeeId } = body;
    return this.employeeService.activateDeactivateEmployee(employeeId);
  }

  @Get()
  getAllEmployees(): Observable<Employee[]> {
    return this.employeeService.getAllEmployees();
  }
}