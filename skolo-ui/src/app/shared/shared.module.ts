import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CloseHeaderComponent } from '../close-header/close-header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ErrorModalComponent } from './modals/error-modal/error-modal.component';
import { SuccessModalComponent } from './modals/success-modal/success-modal.component';

@NgModule({ declarations: [
        CloseHeaderComponent,
        FooterComponent,
        HeaderComponent,
        ErrorModalComponent,
        SuccessModalComponent,
    ],
    exports: [
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,
        CloseHeaderComponent,
        FormsModule,
        FooterComponent,
        HeaderComponent,
        ErrorModalComponent,
        SuccessModalComponent,
    ], imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot()], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class SharedModule { }
