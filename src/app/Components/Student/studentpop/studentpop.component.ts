// studentpop.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/Models/Student.model';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-studentpop',
  templateUrl: './studentpop.component.html',
  styleUrls: ['./studentpop.component.css'],
})
export class StudentpopComponent implements OnInit {
  studentDetail: Student = {
    studentId: 0,
    firstName: '',
    lastName: '',
    mobile: 0,
    email: '',
    nic: 0,
    dateOfBirth: new Date('2000-07-13'),
    address: '',
    profileImageUrl: '',
  };

  constructor(
    private route: ActivatedRoute,
    private studentservice: StudentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('studentId');

      if (id) {
        this.studentservice.getstudent(id).subscribe((response) => {
          this.studentDetail = response;
        });
      }
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.studentDetail.profileImageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  

  updatestudent() {
    
    const studentId: string | number = this.studentDetail.studentId;

    this.studentservice
      .updatestudent(String(studentId), this.studentDetail)
      .subscribe({
        next: (response) => {
          this.router.navigate(['students']);
        },
        error: (error) => {
          console.error('Error updating student:', error);
        },
      });
  }

  deletestudent(id:string){
    this.studentservice.deletestudent(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['students']);
        
      }
    })
  }
}
