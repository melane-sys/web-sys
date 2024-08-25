import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-educator',
  templateUrl: './hero-educator.component.html',
  styleUrls: ['./hero-educator.component.css']
})
export class HeroEducatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
