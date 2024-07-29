import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectComponent } from './core/connect/connect.component';
import { PageHeaderComponent } from './core/page-header/page-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ConnectComponent,
    PageHeaderComponent
  ],
  exports:[
    ConnectComponent,
    PageHeaderComponent
  ]
})
export class SharedModule { }
