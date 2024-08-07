import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  classLevels: string[] = ['Primary School', 'Secondary School', 'Senior School'];
  subjects: string[] = [];
  subjectOptions: { [key: string]: string[] } = {
    'Primary School': ['Math', 'Science', 'English', 'SiSwati', 'Social studies'],
    'Secondary School': ['Maths', 'Additinal Maths', 'Science', 'English', 'Literature', 'Agriculture', 'SiSwati'],
    'Senior School': ['Maths', 'Physical Science', 'ICT', 'English','Biology','Geograph', 'SiSwati']
  };
  selectedSubjects: Set<string> = new Set();

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      classLevel: ['', Validators.required],
      subjects: [[], Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.registerForm.get('classLevel')?.valueChanges.subscribe(value => {
      this.updateSubjects(value);
    });
  }

  updateSubjects(classLevel: string): void {
    this.subjects = this.subjectOptions[classLevel] || [];
    this.registerForm.get('subjects')?.setValue([]); // Clear selected subjects
  }
  
  onSubjectChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.checked) {
      this.selectedSubjects.add(input.value);
    } else {
      this.selectedSubjects.delete(input.value);
    }
    this.registerForm.get('subjects')?.setValue(Array.from(this.selectedSubjects)); // Update form control value
  }

  isSubjectSelected(subject: string): boolean {
    return this.selectedSubjects.has(subject);
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }

}
