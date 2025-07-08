import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'app-courses-list',
  imports: [CourseCardComponent],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent implements OnInit{
  title: string ="Available Courses";
  courses = [
    {id: 1, title: 'Intro to Angular', description: 'Learn the basics of Angular', prices: 49, date: '2025-07-07', soldOut: false, img: 'download.png', onSale: false},
    {id: 2, title: 'Advance Angular', description: 'Deep dive into Angular', prices: 99, date: '2025-07-07', soldOut: true, img: 'download.png', onSale: true},
    {id: 3, title: 'RxJS Fundamentals', description: 'Asynchoronous Data Stream', prices: 199, date: '2025-07-07', soldOut: false, img: 'rxjs-logo.png', onSale: false},
  ];


  ngOnInit(): void {
    console.log("Course list initialized")
  }

  onCourseBooked(course: any): void{
    console.log('Parent heard about booking: ', course.title);
  }

}
