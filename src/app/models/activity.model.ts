export interface Activity {
  id: string;
  sport: 'Corrida' | 'Ciclismo' | 'Ginásio' | 'Natação' | 'Outro';
  date: string;
  duration: number; 
  intensity: 'Baixa' | 'Moderada' | 'Alta';
  favorite: boolean;
}
