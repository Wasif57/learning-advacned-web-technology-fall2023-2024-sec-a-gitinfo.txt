import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/createEmployee.dto';
import { Employee } from './entities/employee.model';
import { register } from 'module';
@Injectable()
export class EmployeeService {
  employees: Employee[] - [] ;
  register(createEmployeeDto : CreateEmployeeDto){
    return this.employeeService.register(CreateEmployeeDto);
  }
  
getAll(){
  return [...this.employees];

}
find(name1 : string){
  return this.employees.find(obj -> object.eName === name1);

}
PaymentRequestUpdateEvent()