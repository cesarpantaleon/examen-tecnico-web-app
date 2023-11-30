import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LoginComponent } from "./components/auth/login/login.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageService } from "./core/guard/storage.service";
import { AuthorizatedGuard } from "./core/guard/authorized.guard";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { InterceptorService } from "./services/interceptor.service";
import { Page404Component } from './components/page404/page404.component';
import { PagesModule } from "./components/pages/pages.module";

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthenticationService } from "./services/authentication.service";


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        Page404Component
      ],
      imports: [
        CommonModule,
        RouterModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule, 
        MatInputModule,
        MatIconModule,
        
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        
        ReactiveFormsModule,
        
        PagesModule,
        
      ],
      providers: [
        StorageService,
        AuthorizatedGuard,
        AuthenticationService,
        
        { provide: 'LOCALSTORAGE', useValue: window.localStorage },
        {
          provide: LocationStrategy,
          useClass: HashLocationStrategy
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: InterceptorService,
          multi: true
        }
      ],
      bootstrap: [AppComponent]
})
export class AppModule{}


