import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploaderComponent } from './module/file-uploader/file-uploader.component';
import { EmailVerifierComponent } from './module/email-verifier/email-verifier.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FileUploaderComponent,
    EmailVerifierComponent
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    AppRoutingModule,
    RouterModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
