import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon,
  IonTextarea
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-estado-fisico',
  templateUrl: './estado-fisico.page.html',
  styleUrls: ['./estado-fisico.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonIcon,
    IonTextarea
  ]
})
export class EstadoFisicoPage {}
