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
    this.coursesService.getCourses().subscribe({
      next: (data: Course[]) => {
        this.courses = data;
      },
      error: (error) => {
        console.log("Error fetching courses: ", error);
      }
    });
  }

  // ngOnInit(): void {
  //   this.courses = [
  //     { id: 1, title: 'Angular Basics', description: 'Learn Angular', prices: 100, date: '2025-07-10', img: '', soldOut: false, onSale: false },
  //     { id: 2, title: 'RxJS Deep Dive', description: 'Master RxJS', prices: 120, date: '2025-07-11', img: '', soldOut: false, onSale: true }
  //   ];
  // }
  
  onCourseBooked(course: Course): void{
    console.log('Parent heard about booking: ', course.title);
  }

    onWishListAdded(course: Course): void{
    console.log('Wishlist event triggered for: ', course.title);
    this.wishlist.push(course);
  }
}
