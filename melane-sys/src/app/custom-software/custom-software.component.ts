import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-custom-software',
  templateUrl: './custom-software.component.html',
  styleUrls: ['./custom-software.component.css']
})
export class CustomSoftwareComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta){}
  
  ngOnInit(): void {
    this.titleService.setTitle('Custom Software Development - Melane Systems');
    this.metaService.updateTag({ name: 'description', content: 'Custom technical innovations allow businesses to introduce their best perks to the market. We are proud to develop fully customizable solutions for our clients, promptly release them, and make commercially successful products.' });
  }

}
