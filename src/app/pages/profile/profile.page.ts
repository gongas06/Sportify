import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButton,
  IonAvatar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonButton,
    IonAvatar,
  ],
})
export class ProfilePage {
   constructor(private router: Router) {}

  gotoPersonalizacao() {
    this.router.navigate(['/personalizacao']);
  }
}
