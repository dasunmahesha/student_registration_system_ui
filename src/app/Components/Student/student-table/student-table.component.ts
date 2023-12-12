import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/Models/Student.model';
import { StudentsService } from 'src/app/Services/students.service';
import { SinglestudentComponent } from '../singlestudent/singlestudent.component';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css'],
})
export class StudentTableComponent implements OnInit {
  students: Student[] = [];
  dtOptions: DataTables.Settings = {};

  constructor(
    private studentsservice: StudentsService,
    private dialog: MatDialog
  ) {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      lengthMenu: [10, 5, 25, 50],
      searching: true,
      ordering: true,
      info: true,
    };
  }

  ngOnInit(): void {
    this.studentsservice.getallstudents().subscribe({
      next: (students) => {
        this.students = students;
        console.log(this.students);
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  opendialog(student: Student): void {
    const dialogRef = this.dialog.open(SinglestudentComponent, {
      width: '30%',
      data: student, 
    });
  }
}
