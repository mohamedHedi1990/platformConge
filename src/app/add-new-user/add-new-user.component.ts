import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent implements OnInit {
user = {
  nom: '',
  pernom: '',
  phone: null,
  email: '',
  password: '',
  matricule: '',
  userPictureUrl: '',
};
  imagePath;
  imgURL: any;
  message: string;
  newsIlustration;
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  preview(files) {
    if (files.length === 0) {
      return;
    }
    this.newsIlustration = files[0];
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (event) => {
      this.imgURL = reader.result;
    };
  }

}
