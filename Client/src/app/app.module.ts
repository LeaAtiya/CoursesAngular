import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http"
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './modules/login/login.component';
import { UsersModule } from "./modules/users/user.module";
import { RegisterComponent } from './modules/register/register.component';
import { RoutingModule } from "./modules/routing/routing.module";
import { AllCoursesComponent } from './modules/Courses/all-courses/all-courses.component';
import { CourseModule } from "./modules/Courses/course.module";
import { CourseDetailsComponent } from './modules/Courses/course-details/course-details.component';
import { AddCourseComponent } from './modules/Courses/add-course/add-course.component';
import { LogOutComponent } from './modules/log-out/log-out.component';
import { EditCourseComponent } from "./modules/Courses/edit-course/edit-course.component";
import { CategoryService } from "./modules/categories/category.service";
import { LecturerModule } from "./modules/lecturers/lecturer.module";
import { IconPipe } from "./pipe"


@NgModule({
   declarations: [AppComponent, LoginComponent, RegisterComponent, AllCoursesComponent, CourseDetailsComponent, AddCourseComponent, LogOutComponent, EditCourseComponent, IconPipe],
   imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, UsersModule, RoutingModule, CourseModule, LecturerModule],
   providers: [CategoryService],
   bootstrap: [AppComponent]
})
export class AppModule {


}