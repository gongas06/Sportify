import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-personalizacao',
  templateUrl: './personalizacao.page.html',
  styleUrls: ['./personalizacao.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonItem,
    IonLabel
  ]
})
export class PersonalizacaoPage {

  tema: 'claro' | 'escuro' = 'escuro';
  tempo: 'minutos' | 'horas' = 'minutos';
  distancia: 'km' | 'milhas' = 'km';

  selecionarTema(valor: 'claro' | 'escuro') {
    this.tema = valor;
  }

  selecionarTempo(valor: 'minutos' | 'horas') {
    this.tempo = valor;
  }

  selecionarDistancia(valor: 'km' | 'milhas') {
    this.distancia = valor;
  }

  guardar() {
    console.log({
      tema: this.tema,
      tempo: this.tempo,
      distancia: this.distancia
    });
  }
}
