import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import Chart from 'chart.js/auto';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/angular/standalone';

import { ActivityService, Activity } from '../../services/activity.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.page.html',
  styleUrls: ['./statistic.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
  ],
})
export class StatisticPage implements AfterViewInit {

  totalHoras = 0;
  atividadeMaisFrequente = '';
  chart!: Chart;

  constructor(private activityService: ActivityService) {}

  ngAfterViewInit(): void {
    const activities = this.activityService.getActivities();

    this.calcularResumo(activities);
    this.criarGraficoSemanal(activities);
  }

  // 🔹 Converter "HH:MM" → horas
  private parseDuracao(duracao: string): number {
    const [h, m] = duracao.split(':').map(Number);
    return h + m / 60;
  }

  // 🔹 Estatísticas principais
  private calcularResumo(activities: Activity[]) {
    const tipoCount: Record<string, number> = {};

    this.totalHoras = activities.reduce((total, a) => {
      tipoCount[a.tipo] = (tipoCount[a.tipo] || 0) + 1;
      return total + this.parseDuracao(a.duracao);
    }, 0);

    this.atividadeMaisFrequente =
      Object.keys(tipoCount).sort(
        (a, b) => tipoCount[b] - tipoCount[a]
      )[0] || '—';
  }

  // 🔹 Gráfico semanal real
  private criarGraficoSemanal(activities: Activity[]) {
    const dias = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

    const dadosPorTipo: Record<string, number[]> = {};

    activities.forEach(a => {
      const dia = new Date(a.data).getDay();
      const horas = this.parseDuracao(a.duracao);

      if (!dadosPorTipo[a.tipo]) {
        dadosPorTipo[a.tipo] = Array(7).fill(0);
      }

      dadosPorTipo[a.tipo][dia] += horas;
    });

    const datasets = Object.keys(dadosPorTipo).map((tipo) => ({
      label: tipo,
      data: dadosPorTipo[tipo],
    }));

    const canvas = document.getElementById('weeklyChart') as HTMLCanvasElement;
    if (!canvas) return;

    this.chart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: dias,
        datasets,
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom' },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: value => value + 'h',
            },
          },
        },
      },
    });
  }
}

