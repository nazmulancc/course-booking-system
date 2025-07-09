import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';


@Component({
  selector: 'app-courses-list',
  imports: [CourseCardComponent],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent implements OnInit{
  title: string ="Available Courses";
  wishlist: Course[] = [];
  courses: Course[] = [];

  constructor(private coursesService: CourseService) {
  }
  
  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
    console.log("Course list initialized")
  }

  onCourseBooked(course: Course): void{
    console.log('Parent heard about booking: ', course.title);
  }

    onWishListAdded(course: Course): void{
    console.log('Wishlist event triggered for: ', course.title);
    this.wishlist.push(course);
  }
}
