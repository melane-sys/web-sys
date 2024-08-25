import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.css']
})
export class CloudComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta){}
  
  ngOnInit(): void {
    this.titleService.setTitle('Cloud Architecture Design - Melane Systems');
    this.metaService.updateTag({ name: 'description', content: 'we provide comprehensive cloud engineering services that help businesses harness the full potential of cloud computing. Our expert team is dedicated to delivering scalable, secure, and efficient cloud solutions tailored to your unique needs.' });
  }

}
