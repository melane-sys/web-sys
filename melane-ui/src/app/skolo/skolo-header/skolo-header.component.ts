import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skolo-header',
  templateUrl: './skolo-header.component.html',
  styleUrls: ['./skolo-header.component.css']
})
export class SkoloHeaderComponent implements OnInit {

  @Input() dark: boolean = false;
  @Input() sticky: boolean = false;
  @Input() absolute: boolean = false;

  constructor() {}

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 80) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  ngOnInit(): void {}

}
