import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputCommifiedDirective } from './mat-input-commified.directive';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  declarations: [ AppComponent, MatInputCommifiedDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
