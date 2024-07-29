import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-skolo-price',
  templateUrl: './skolo-price.component.html',
  styleUrls: ['./skolo-price.component.css']
})
export class SkoloPriceComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta){}
  
  ngOnInit(): void {
    this.titleService.setTitle('Price - Skoloi');
    this.metaService.updateTag({ name: 'description', content: 'Enhancing Education In Eswatini, One Click At A Time.' });
  }

}
