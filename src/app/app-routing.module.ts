import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploaderComponent } from './module/file-uploader/file-uploader.component';
import { EmailVerifierComponent } from './module/email-verifier/email-verifier.component';

const routes: Routes = [

  {
    path : "",
     component: EmailVerifierComponent
  },
  {
    path: 'file-uploader',
    component: FileUploaderComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
