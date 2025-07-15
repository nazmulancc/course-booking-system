import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-new-course',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-new-course.component.html',
  styleUrl: './add-new-course.component.css'
})
export class AddNewCourseComponent {
  addCourseForm!: FormGroup; 
  submissionSuccess: boolean = false;
  submissionError: string = '';

  constructor(private fb: FormBuilder, private courseService: CourseService) {}

  ngOnInit(): void {
    this.addCourseForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: ['', [Validators.required, Validators.min(0)]],
      date: ['',[Validators.required]],
      img: ['', [Validators.required]],
      onSale: [false]
    });
  }

  get title() {
    return this.addCourseForm.get('title');
  }

  get description() {
    return this.addCourseForm.get('description');
  }

  get price() {
    return this.addCourseForm.get('price');
  }

  get date() {
    return this.addCourseForm.get('date');
  }

  get img() {
    return this.addCourseForm.get('img');
  }

  get onSale() {
    return this.addCourseForm.get('onSale');
  }

  onSubmit(): void {
    if(this.addCourseForm.invalid){
      return;
    }

    const newCourse: Course = {
      id: 0, // Assuming the backend will assign an ID
      title: this.addCourseForm.value.title,
      description: this.addCourseForm.value.description,  
      price: this.addCourseForm.value.price,
      date: this.addCourseForm.value.date,
      img: this.addCourseForm.value.img,
      soldOut: false, // Default value
      onSale: this.addCourseForm.value.onSale
    };

    this.courseService.addCourse(newCourse).subscribe({
      next: () => {
        console.log('Course added successfully');
        this.submissionSuccess = true;
        this.addCourseForm.reset();
      },
      error: (error) => {
        console.error('Error adding course:', error);
        this.submissionError = 'Failed to add course. Please try again.';
      }
    });
}
}
