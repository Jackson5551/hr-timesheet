import { Component } from '@angular/core';
import { Department } from 'src/app/interfaces/department';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})

export class DepartmentsComponent {
  departments: Department[] = [
    { id: '1', name: 'Customer Success' },
    { id: '2', name: 'Sales' },
    { id: '3', name: 'Finance' },
  ];
}
