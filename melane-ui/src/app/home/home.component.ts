import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta){}
  
  ngOnInit(): void {
    this.titleService.setTitle('Melane Systems');
    this.metaService.updateTag({ name: 'description', content: 'Welcome to Melane Systems, where innovation meets progress. We specialize in creating cutting-edge software solutions that empower businesses and individuals to reach new heights. Join us in defining the future.' });
  }

}
