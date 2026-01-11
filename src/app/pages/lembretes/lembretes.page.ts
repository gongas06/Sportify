import { Component } from '@angular/core';
import {
 IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonIcon, IonToggle, IonFab, IonButton
} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common'; 

@Component({ 
  selector: 'app-lembretes', 
  templateUrl: './lembretes.page.html', 
  styleUrls: ['./lembretes.page.scss'], 
  standalone: true, 
  imports: [ CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonIcon, IonToggle, IonFab, IonButton ] }) 
  export class LembretesPage {}

