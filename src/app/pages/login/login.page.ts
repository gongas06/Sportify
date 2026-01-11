import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonContent,
  IonInput,
  IonButton,
  IonImg
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonInput,
    IonButton,
    IonImg
  ]
})
export class LoginPage {

  email = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  login() {
    if (!this.email || !this.password) {
      this.error = 'Preencha todos os campos';
      return;
    }


    this.router.navigate(['/tabs/statistic']);
  }

  gotoRecover() {
    this.router.navigate(['/recover']);
  }
}
