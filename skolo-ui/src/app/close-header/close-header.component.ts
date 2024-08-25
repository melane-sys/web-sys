import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-close-header',
  templateUrl: './close-header.component.html',
  styleUrls: ['./close-header.component.css']
})
export class CloseHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  close() {
    this.router.navigate(["/"]);
  }
}
