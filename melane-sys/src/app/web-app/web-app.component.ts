import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-web-app',
  templateUrl: './web-app.component.html',
  styleUrls: ['./web-app.component.css']
})
export class WebAppComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta){}
  
  ngOnInit(): void {
    this.titleService.setTitle('Custom Software Development - Melane Systems');
    this.metaService.updateTag({ name: 'description', content: 'Focus on Your Core Business. Outsource Web App Development to the Experts.' });
  }

}
