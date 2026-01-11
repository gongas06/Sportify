import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonToggle,
  IonSelect,
  IonSelectOption,
  IonIcon,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,

    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonIcon
  ]
})

export class SettingsPage implements OnInit {
  darkMode = false;
  language = 'pt';

  ngOnInit() {
    // Carrega o modo escuro salvo (opcional)
    const saved = JSON.parse(localStorage.getItem('darkMode') || 'false');
    this.darkMode = saved;

    // Aplica o tema
    document.body.classList.toggle('dark', this.darkMode);
  }

  toggleDarkMode(event: any) {
    const isDark = event.detail.checked;
    document.body.classList.toggle('dark', isDark);

    // Salva a preferência
    localStorage.setItem('darkMode', JSON.stringify(isDark));
  }

  logout() {
    console.log('Logout');
  }
}
