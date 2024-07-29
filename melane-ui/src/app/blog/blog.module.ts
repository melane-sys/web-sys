import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MenuModule
  ],
  declarations: [BlogComponent,ListComponent]
})
export class BlogModule { }
