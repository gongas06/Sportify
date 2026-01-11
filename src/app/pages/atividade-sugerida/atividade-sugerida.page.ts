import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-atividade-sugerida',
  templateUrl: './atividade-sugerida.page.html',
  styleUrls: ['./atividade-sugerida.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonButton,
  ],
})
export class AtividadeSugeridaPage {}
