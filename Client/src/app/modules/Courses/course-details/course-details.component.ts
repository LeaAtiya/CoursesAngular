import { Component, Input, OnInit } from '@angular/core';
import { Course, LearningWay } from '../course.model';
import { User } from '../../users/user.model';
import { Category } from '../../categories/category.model';
import { CategoryService } from '../../categories/category.service';
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  @Input()
  course?: Course;

  categories: Category[] = []
  editCourse?: boolean;
  currentUser?: User;
  isStartDateInNextWeek?: boolean;
  isLecturer?: boolean;
  learningWay = Object.values(LearningWay);
  constructor(private _categoryService: CategoryService) { }

  ngOnInit(): void {
    this.checkStartDate();
    const storedData = sessionStorage.getItem('userData');
    if (storedData) {
      this.currentUser = JSON.parse(storedData);
    }
    const storedIsLecturer = sessionStorage.getItem('isLecturer');
    if (storedIsLecturer) {
      this.isLecturer = JSON.parse(storedIsLecturer);
    }
    this._categoryService.getCategoriesFromServer().subscribe(data => {
      this.categories = data;
    })


  }

  checkStartDate(): void {

    if (this.course?.startDate) {
      const start = new Date(this.course.startDate);
      const today = new Date();
      const nextWeek = new Date();
      nextWeek.setDate(today.getDate() + 7); // Get date for the start of the next week
      // Check if startDate is in the next week
      this.isStartDateInNextWeek = start <= nextWeek && start >= today;
      console.log("start", this.isStartDateInNextWeek)
    }
  }
  ifEditCourse() {
    this.editCourse = true;
  }
  changeEdit() {
    this.editCourse = false;
  }
  IconRouting(id:number) {
    return this.categories.filter(x=>x.id==id)[0];
  }

}
