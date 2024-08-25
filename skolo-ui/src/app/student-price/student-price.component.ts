import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-price',
  templateUrl: './student-price.component.html',
  styleUrls: ['./student-price.component.css']
})
export class StudentPriceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  close() {
   this.router.navigate(["/"]);
  }
}
