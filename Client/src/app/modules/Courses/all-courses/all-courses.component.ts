import { Component, OnInit } from '@angular/core';
import { Course, LearningWay } from '../course.model';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';
import { Category } from '../../categories/category.model';
import { CategoryService } from '../../categories/category.service';
import { User } from '../../users/user.model';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})

export class AllCoursesComponent implements OnInit {

  ALLCOURSES: Course[] = [];

  selectedCourse?: Course;
  courses: Course[] = [];
  categories: Category[] = [];
  learningWays = LearningWay;
  learning = Object.values(this.learningWays);
  currentUser?: User;
  constructor(private _courseService: CourseService, private _categoryService: CategoryService, private router: Router) {
  }
  ngOnInit(): void {
    this._courseService.getCoursesFromServer().subscribe(data => {
      this.ALLCOURSES = data;
      this.courses = data;
    })
    this._categoryService.getCategoriesFromServer().subscribe(data => {
      this.categories = data;
    })
    const storedData = sessionStorage.getItem('userData');
    if (storedData) {
      this.currentUser = JSON.parse(storedData);

    }
  }
  selectCourse(c: Course) {
    this.selectedCourse = c;
  }
  changeCourseName(name: any) {
    this.courses = this.ALLCOURSES.filter(x => x.name == name.target.value || name.target.value == "")

  }
  changeCategory(category: any) {
    let id = this.categories.filter(x => x.name == category.target.value)[0];
    this.courses = this.ALLCOURSES.filter(x => category.target.value == "" || x.categoryId == id.id)
  }

  changeLearningWay(learn: any) {
    let index = this.learning.indexOf(learn.target.value);
    this.courses = this.ALLCOURSES.filter(x => learn.target.value == "" || x.learningWay == index)

  }

}
