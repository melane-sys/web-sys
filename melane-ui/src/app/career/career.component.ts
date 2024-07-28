import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta){}
  
  ngOnInit(): void {
    this.titleService.setTitle('Join our team - Melane Systems');
    this.metaService.updateTag({ name: 'description', content: 'We need passionate professionals hardwired to getting desired results. Opportunities at Melane systems appear in those areas where we always hire talents. Find the position below that inspires you the most.' });
  }
}
