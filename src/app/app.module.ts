import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { AppComponent } from './app.component';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { addressFormlyType } from './address';
import { RepeatTypeComponent } from './repeat-section.type';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    FormlyModule.forRoot({
      types: [
        addressFormlyType,
        { name: 'date', component: DatePickerComponent },
        { name: 'repeat', component: RepeatTypeComponent },
      ]
    }),
    FormlyBootstrapModule,
  ],
  declarations: [ 
    AppComponent, 
    DemoFormComponent,
    DatePickerComponent ,
    RepeatTypeComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
