import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-atividade',
  templateUrl: './criar-atividade.component.html',
  styleUrls: ['./criar-atividade.component.css']
})
export class CriarAtividadeComponent {

  sports = ['Corrida', 'Ciclismo', 'Natação', 'Ginásio', 'Futebol', 'Outro'];
  selectedSport = 'Ginásio';

  date = '2025-12-21';
  duration = '00:30';

  intensities = ['Baixa', 'Moderada', 'Alta'];
  intensity = 'Moderada';
  intensityValue = 2;

}
