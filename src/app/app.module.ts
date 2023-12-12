import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentTableComponent } from './Components/Student/student-table/student-table.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StudentpopComponent } from './Components/Student/studentpop/studentpop.component';
import { AddstudentComponent } from './Components/Student/addstudent/addstudent.component';
import { FormsModule } from '@angular/forms';
import {DataTablesModule} from 'angular-datatables'
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    StudentTableComponent,
    StudentpopComponent,
    AddstudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    MatDialogModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
