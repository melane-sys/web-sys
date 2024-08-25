import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-mobile-app',
  templateUrl: './mobile-app.component.html',
  styleUrls: ['./mobile-app.component.css']
})
export class MobileAppComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta){}
  
  ngOnInit(): void {
    this.titleService.setTitle('Mobile App Development - Melane Systems');
    this.metaService.updateTag({ name: 'description', content: 'Mobile app development services are aimed at building iOS, Android and cross-platform applications that effectively complement or substitute web solutions.' });
  }

}
