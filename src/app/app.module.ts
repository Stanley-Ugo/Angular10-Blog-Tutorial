import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomeStyleDirective } from './custome-style.directive';
import { AdminListComponent } from './admin-list/admin-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomeStyleDirective,
    AdminListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
