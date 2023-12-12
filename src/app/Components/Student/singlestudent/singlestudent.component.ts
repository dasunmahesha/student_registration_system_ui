import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from 'src/app/Models/Student.model';
import { StudentsService } from 'src/app/Services/students.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-singlestudent',
  templateUrl: './singlestudent.component.html',
  styleUrls: ['./singlestudent.component.css'],
})
export class SinglestudentComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public student: Student,
    private studentservice: StudentsService,
    private router: Router,
    private dialogRef: MatDialogRef<SinglestudentComponent>
  ) {}

  ngOnInit(): void {}
  
}
