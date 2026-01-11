import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-atividade',
  templateUrl: './criar-atividade.page.html',
  styleUrls: ['./criar-atividade.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class CriarAtividadePage {

  tipos = [
    { nome: 'Corrida', icon: 'walk-outline' },
    { nome: 'Ciclismo', icon: 'bicycle-outline' },
    { nome: 'Natação', icon: 'water-outline' },
    { nome: 'Ginásio', icon: 'barbell-outline' },
    { nome: 'Futebol', icon: 'football-outline' },
    { nome: 'Outro', icon: 'ellipsis-horizontal-outline' },
  ];

  tipoSelecionado = 'Ginásio';
  duracao = '00:30';
  intensidade = 'Moderada';

dataSelecionada = new Date().toISOString();

  selecionarTipo(tipo: any) {
    this.tipoSelecionado = tipo.nome;
  }

  guardar() {
    console.log({
      tipo: this.tipoSelecionado,
      duracao: this.duracao,
      intensidade: this.intensidade,
    });
  }

  constructor(private router: Router) {}
  gotoProfile() {
    this.router.navigate(['/profile']);
  }

  // 👉 ADICIONA AQUI
  abrirMaps() {
    if (!navigator.geolocation) {
      console.error("Geolocalização não suportada");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        const url = `https://www.google.com/maps?q=${lat},${lng}`;
        window.open(url, '_blank');
      },
      (err) => {
        console.error("Erro ao obter localização:", err);
      }
    );
  }
}
