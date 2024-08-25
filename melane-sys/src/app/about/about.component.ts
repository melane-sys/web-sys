import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta){}
  
  ngOnInit(): void {
    this.titleService.setTitle('Who we are - Melane Systems');
    this.metaService.updateTag({ name: 'description', content: 'Melane systems is a full-cycle app & software development company which covers specific client business needs and manage them with the help of the best possible technology solutions.' });
  }

}
