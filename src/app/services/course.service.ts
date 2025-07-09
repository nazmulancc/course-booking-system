import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

    private courses: Course[] = [
    {id: 1, title: 'Intro to Angular', description: 'Learn the basics of Angular', prices: 49, date: '2025-07-07', soldOut: false, img: 'download.png', onSale: false},
    {id: 2, title: 'Advance Angular', description: 'Deep dive into Angular', prices: 99, date: '2025-07-07', soldOut: true, img: 'download.png', onSale: true},
    {id: 3, title: 'RxJS Fundamentals', description: 'Asynchoronous Data Stream', prices: 199, date: '2025-07-07', soldOut: false, img: 'rxjs-logo.png', onSale: false},
  ];

  constructor() { }

  getCourses(): Course[] {
    return this.courses;
  }
}
