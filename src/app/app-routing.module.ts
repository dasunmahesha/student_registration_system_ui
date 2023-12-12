import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentTableComponent } from './Components/Student/student-table/student-table.component';
import { AddstudentComponent } from './Components/Student/addstudent/addstudent.component';
import { StudentpopComponent } from './Components/Student/studentpop/studentpop.component';
const routes: Routes = [
  {
    path: '',
    component: StudentTableComponent,
  },
  {
    path: 'students',
    component: StudentTableComponent,
  },
  {
    path: 'addstudent',
    component: AddstudentComponent,
  },
  {
    path: 'students/:studentId',
    component: StudentpopComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
