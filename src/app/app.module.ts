import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppComponent } from './app.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';


import { InMemoryDataService } from './in-memory-data.service';
import { DepartmentService } from './department.service';


import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    DepartmentDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [DepartmentService, InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
