import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SizeFinderComponent } from './size-finder/size-finder.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SizeFinderModalComponent } from './size-finder-modal/size-finder-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SizeFinderComponent,
    NavbarComponent,
    SizeFinderModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
