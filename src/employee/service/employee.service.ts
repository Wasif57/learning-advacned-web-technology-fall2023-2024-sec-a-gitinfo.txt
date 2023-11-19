import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Observable, from } from 'rxjs';
import { Employee } from '../models/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  activateDeactivateEmployee(employeeId: string): Observable<Employee> {
    console.log('Received employeeId:', employeeId);
    return from(
        this.employeeRepository.findOne({ where: { employeeId } }).then((employee) => {
            if (!employee) {
              throw new Error('Employee not found');
        }

        employee.status = employee.status === 'Active' ? 'Deactive' : 'Active';

        return this.employeeRepository.save(employee);
      }),
    );
  }
  getAllEmployees(): Observable<Employee[]> {
    return from(this.employeeRepository.find());
}
}
