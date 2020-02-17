import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent,loginViewDialog } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AboutComponent } from './about/about.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import { GalleryComponent,imageViewDialog } from './gallery/gallery.component';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    imageViewDialog,
    loginViewDialog
  ],
  imports: [
    BrowserModule,MatInputModule,MatMenuModule,
    HttpClientModule,MatSnackBarModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatDialogModule,
    MatButtonModule,MatIconModule,MatCardModule,MatGridListModule,
    MDBBootstrapModule.forRoot(),
    CarouselModule.forRoot(),
    MatToolbarModule,MatFormFieldModule,FormsModule
  ],
  providers: [],
  entryComponents:[imageViewDialog,loginViewDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
