import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonContent,
  IonButton,
  IonImg
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonButton,
    IonImg
  ]
})
export class HomePage {

  constructor(private router: Router) {}

  gotoLogin() {
    this.router.navigate(['/login']);
  }

  gotoRegister() {
    this.router.navigate(['/register']);
  }

  gotoRecover() {
    this.router.navigate(['/recover']);
  }
}
