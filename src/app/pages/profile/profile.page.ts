import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import Chart from 'chart.js/auto';

import {
  IonContent,
  IonButton,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonNote,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule, 
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonAvatar,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonNote,
  ]
})
export class ProfilePage implements AfterViewInit {

  ngAfterViewInit(): void {
    this.createWeeklyChart();
  }

  createWeeklyChart() {
    const canvas = document.getElementById('weeklyChart') as HTMLCanvasElement;
    if (!canvas) return;

    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
        datasets: [
          {
            label: 'Ginásio',
            data: [2.5, 1.8, 2, 0, 3, 2.5, 0],
            backgroundColor: '#c084fc'
          },
          {
            label: 'Corrida',
            data: [3, 1.7, 1.8, 0, 2.8, 1.8, 4],
            backgroundColor: '#6366f1'
          },
          {
            label: 'Ciclismo',
            data: [0, 1.5, 0, 1.2, 1.7, 0, 0],
            backgroundColor: '#fb923c'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: value => value + 'h'
            }
          }
        }
      }
    });
  }
}

