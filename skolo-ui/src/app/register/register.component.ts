import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared/SharedData.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: UntypedFormGroup;
  classLevels: string[] = ['Primary School', 'Secondary School', 'Senior School'];
  subjects: string[] = [];
  subjectOptions: { [key: string]: string[] } = {
    'Primary School': ['Math', 'Science', 'English', 'SiSwati', 'Social studies'],
    'Secondary School': ['Maths', 'Additinal Maths', 'Science', 'English', 'Literature', 'Agriculture', 'SiSwati'],
    'Senior School': ['Core Maths', 'Extended Maths','Physical Science', 'ICT', 'English','Biology','Geograph', 'SiSwati']
  };
  selectedSubjects: Set<string> = new Set();

  constructor(private fb: UntypedFormBuilder, private router: Router, private sharedDataService: SharedDataService) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      classLevel: ['', Validators.required],
      subjects: [[], Validators.required]
    });
  }

  ngOnInit(): void {
    this.registerForm.get('classLevel')?.valueChanges.subscribe(value => {
      this.updateSubjects(value);
    });

    // Load existing data if available
    const savedData = this.sharedDataService.getRegisterData();
    if (savedData) {
      this.registerForm.patchValue(savedData);
      this.selectedSubjects = new Set(savedData.subjects);
      this.subjects = this.subjectOptions[savedData.classLevel] || [];
    }
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
      this.sharedDataService.setRegisterData(this.registerForm.value);
      this.router.navigate(['/payment']);
    }
  }

}
