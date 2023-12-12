import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/Models/Student.model';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css'],
})
export class AddstudentComponent implements OnInit {
  addstudent: Student = {
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
    private studentservice: StudentsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          const MAX_WIDTH = 250; 
          const MAX_HEIGHT = 250; 
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;
          ctx?.drawImage(img, 0, 0, width, height);

          const dataUrl = canvas.toDataURL('image/jpeg'); 
          this.addstudent.profileImageUrl = dataUrl;
        };
      };
      reader.readAsDataURL(file);
    }
  }

  addnewstudent() {
    this.studentservice.addstudent(this.addstudent).subscribe({
      next: (student) => {
        this.router.navigate(['students']);
      },
    });
  }
}
