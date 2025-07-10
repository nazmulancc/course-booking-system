import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Course } from '../models/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input() course?: Course;
  @Output() courseBooked = new EventEmitter<any>();
  @Output() wishListAdded = new EventEmitter<any>();

  constructor(private router: Router) {}

  onCourseBooked(): void {
    this.courseBooked.emit(this.course);
  }

  onAddToWishList(): void{
    this.wishListAdded.emit(this.course);
  }

  goToDetails(courseId: number): void {
    // This method can be used to navigate to the course details page
    this.router.navigate(['/course', courseId]);
  }
}
