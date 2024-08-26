import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherDto } from 'src/app/_interfaces/teacher/TeacherDto';
import { ErrorHandlerService } from 'src/app/shared/service/error-handler.service';
import { RepositoryService } from 'src/app/shared/service/repository.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {
  teachers: TeacherDto|any;
  constructor( 
    private repoService: RepositoryService,
    private errorService: ErrorHandlerService, 
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getTeachers();
  }

  config: SwiperOptions = {
    slidesPerView: 3.5,
    spaceBetween: 30,
    speed: 1000,
    autoplay: {
      delay: 2500,
    },
    slidesPerGroup: 1,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2.5,
      },
      991: {
        slidesPerView: 3.5,
      },
    },
  };

  public getTeachers = () => {
    const addressUri: string = `api/teachers`;
    this.repoService.getData(addressUri)
    .subscribe(res => {
      this.teachers = res as TeacherDto[];
    },
    (error) => {
      this.errorService.handleError(error);
    })
  }

  public redirectToDetails = async (id: string) => {
    let url: string = `student-portal/teacher/${id}`;
    this.router.navigate([url]);
  }
}
