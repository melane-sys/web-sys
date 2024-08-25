import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.css']
})
export class AiComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta){}
  
  ngOnInit(): void {
    this.titleService.setTitle('AI - Melane Systems');
    this.metaService.updateTag({ name: 'description', content: 'We Can Make AI Work For You.' });
  }

}
