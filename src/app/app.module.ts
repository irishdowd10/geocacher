import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { GeocacherApiService } from './geocacher-api.service';
import { GeocacherFormComponent } from './geocacher-form/geocacher-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GeocacherFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ GeocacherApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
