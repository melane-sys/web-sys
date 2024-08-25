import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectDto } from 'src/app/_interfaces/subject/SubjectDto';
import { ErrorHandlerService } from 'src/app/shared/service/error-handler.service';
import { RepositoryService } from 'src/app/shared/service/repository.service';

@Component({
  selector: 'app-student-enroll',
  templateUrl: './student-enroll.component.html',
  styleUrls: ['./student-enroll.component.css']
})
export class StudentEnrollComponent implements OnInit {
  subject: SubjectDto|any;
  selectedPlan: string = 'monthly'; 
  monthlyCost: number = 125;
  annualCost: number = 900;

  constructor( 
    private repository: RepositoryService,
    private errorService: ErrorHandlerService, 
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.getSubjectDetails();
  }
  close() {
    this.router.navigate(["/student-portal"]);
  }

  private getSubjectDetails = () =>{
    let id: string = this.activeRoute.snapshot.params['id'];
    let apiUrl: string = `api/subjects/${id}`;
 
    this.repository.getData(apiUrl)
    .subscribe(res => {
      this.subject = res as SubjectDto;
    },
    (err: HttpErrorResponse) =>{
      this.errorService.handleError(err);
    })
  }
  onSubmit(): void {
    const message = `
    The payment functionality is currently under development. 
    Please contact the admin for offline assistance. 
    Email: info@melanegroup.com
  `;
  alert(message);
  }
  get totalCost(): number {
    return this.selectedPlan === 'monthly' ? this.monthlyCost : this.annualCost;
  }
}
