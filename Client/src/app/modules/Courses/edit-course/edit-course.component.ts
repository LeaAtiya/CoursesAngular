import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../course.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'edit-course',
  templateUrl: './edit-course.component.html'
})
export class EditCourseComponent implements OnInit {
  @Input()
  course?: Course;

  constructor() { }
  ngOnInit(): void { }
  
}