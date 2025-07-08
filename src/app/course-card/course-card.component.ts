import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-course-card',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input() course: any;
  @Output() courseBooked = new EventEmitter<any>();

  onCourseBooked(): void {
    this.courseBooked.emit(this.course);
  }

  // viewDetails(title: string): void{
  //   alert(`Viewing details for ${title}`)
  // }
}
