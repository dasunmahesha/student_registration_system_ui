import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Student } from '../Models/Student.model';
import { Observable, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  BaseApiUrl: string = environment.BaseApiUrl;
  private deleteStudentSubject = new Subject<void>();
  constructor(private http: HttpClient) {}

  deleteStudentObservable = this.deleteStudentSubject.asObservable();

  getallstudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.BaseApiUrl + '/Api/Student');
  }
  addstudent(addstudent: Student): Observable<Student> {
    return this.http
      .post<Student>(this.BaseApiUrl + '/Api/Student', addstudent)
      .pipe(
        map((response: any) => {
          response.studentId = +response.studentId;
          return response as Student;
        })
      );
  }
  getstudent(id: string): Observable<Student> {
    return this.http.get<Student>(this.BaseApiUrl + '/Api/Student/' + id);
  }
  updatestudent(id: string, updatestudent: Student): Observable<Student> {
    return this.http.put<Student>(
      this.BaseApiUrl + '/Api/Student/' + id,
      updatestudent
    );
  }
  deletestudent(id: string): Observable<Student> {
    return this.http.delete<Student>(this.BaseApiUrl + '/Api/Student/' + id);
  }
}
