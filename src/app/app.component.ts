import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  phoneNumber = '';
  email = '';
  phoneNumberValid = false;

  constructor() {
  }

  title = 'dashboard-task';
  isOpenModal = false;

  openModal(): void {
    this.isOpenModal = true;
  }

  closeModal(): void {
    this.isOpenModal = false;
  }

  phoneNumberValidation(phone: any): void {
    if (phone.length === 13 && phone.startsWith('+91')) {
      this.phoneNumberValid = true;
    } else {
      this.phoneNumberValid = false;
    }
  }
}
