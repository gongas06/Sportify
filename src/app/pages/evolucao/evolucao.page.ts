import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCard,
  IonItem,
  IonLabel,
  IonNote
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-evolucao',
  templateUrl: './evolucao.page.html',
  styleUrls: ['./evolucao.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonCard,
    IonItem,
    IonLabel,
    IonNote
  ]
})
export class EvolucaoPage {}
