import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  imports: [CommonModule],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent implements OnInit {
  // This component will display the details of a specific course
  // It will use the CourseService to fetch the course data by ID
  // and display it in the template.
  
  course: Course | null = null;

  constructor(private courseService: CourseService, private route: ActivatedRoute){}

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      const idStr = params.get('id');
      if (idStr) {
        const id = +idStr;
        this.loadCourseById(id);
      }
    });
  }

  loadCourseById(id: number): void {
    this.courseService.getCourseById(id).subscribe({
      next: (data: Course) => {
        this.course = data;
      },
      error: (err) => {
        console.error('Error fetching course by ID:', err);
      }
    })
  }

}