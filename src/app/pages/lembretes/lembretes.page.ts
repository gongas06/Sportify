import { Component } from '@angular/core';
import {
  IonContent,
  IonIcon,
  IonToggle,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-lembretes',
  templateUrl: './lembretes.page.html',
  styleUrls: ['./lembretes.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonIcon,
    IonToggle,
    IonButton
  ]
})
export class LembretesPage {}

