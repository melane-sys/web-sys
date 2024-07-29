import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-skolo',
  templateUrl: './skolo.component.html',
  styleUrls: ['./skolo.component.css']
})
export class SkoloComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta){}
  
  ngOnInit(): void {
    this.titleService.setTitle('Skoloi - Melane Systems');
    this.metaService.updateTag({ name: 'description', content: 'Enhancing Education In Eswatini, One Click At A Time.' });
  }

}
