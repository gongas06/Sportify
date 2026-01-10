import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  selecionarTipo(tipo: any) {
    this.tipoSelecionado = tipo.nome;
  }

  cancelar() {
    console.log('Atividade cancelada');
  }

  guardar() {
    console.log({
      tipo: this.tipoSelecionado,
      duracao: this.duracao,
      intensidade: this.intensidade,
    });
  }
}

