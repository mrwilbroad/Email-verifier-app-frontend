import { Component } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrl: './file-uploader.component.scss'
})
export class FileUploaderComponent {

  imgSrc: string | null = null

  async onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    const reader = new FileReader();
    reader.readAsDataURL(file!);

    reader.onprogress = (event) => {
      console.log('Progress: ', event.loaded / event.total * 100);
    }

    reader.onload = async () => {
      const base64String = reader.result as string;
      console.log(base64String.split(","));
      this.imgSrc = base64String
    };

    reader.onerror = (error) => {
      console.log('Error: ', error);
    }


  }
}
