import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SizeFinderComponent } from './size-finder/size-finder.component';
import { SizeFinderModalComponent } from './size-finder-modal/size-finder-modal.component';
import { FindSizeService } from './find-size.service';

@NgModule({
  declarations: [
    AppComponent,
    SizeFinderComponent,
    NavbarComponent,
    SizeFinderModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    FindSizeService
  ] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
