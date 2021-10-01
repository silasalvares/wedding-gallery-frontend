import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaModule } from 'primeng/galleria';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './pages/upload/upload.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ApprovalComponent } from './pages/approval/approval.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { GreetingsComponent } from './pages/greetings/greetings.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    GalleryComponent,
    ApprovalComponent,
    WelcomeComponent,
    GreetingsComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FileUploadModule,
    GalleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
