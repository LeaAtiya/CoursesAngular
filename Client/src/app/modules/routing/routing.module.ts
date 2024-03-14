import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AllCoursesComponent } from '../Courses/all-courses/all-courses.component';
import { CourseDetailsComponent } from '../Courses/course-details/course-details.component';
import { AddCourseComponent } from '../Courses/add-course/add-course.component';
import { LogOutComponent } from '../log-out/log-out.component';
import { EditCourseComponent } from '../Courses/edit-course/edit-course.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logOut', component: LogOutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'addCourse', component: AddCourseComponent }, 
  { path: 'allCourses', component: AllCoursesComponent },
  { path: 'editCourses', component: EditCourseComponent },
  { path: 'courseDetails', component: CourseDetailsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login if no route matches
  { path: '**', redirectTo: '/login', pathMatch: 'full' } // Redirect to login if route not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {

 }
