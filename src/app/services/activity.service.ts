import { Injectable } from '@angular/core';

export interface Activity {
  id: number;
  tipo: string;
  data: string;
  duracao: string;
  local?: string;
  intensidade?: string;
  favorito: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private storageKey = 'activities';

  constructor() {}

  // 🔹 Obter todas as atividades
  getActivities(): Activity[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  // 🔹 Guardar lista completa
  private saveActivities(activities: Activity[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(activities));
  }

  // 🔹 Adicionar nova atividade
  addActivity(activity: Activity) {
    const activities = this.getActivities();
    activities.push(activity);
    this.saveActivities(activities);
  }

  // 🔹 Remover atividade
  deleteActivity(id: number) {
    const activities = this.getActivities().filter(a => a.id !== id);
    this.saveActivities(activities);
  }

  // 🔹 Marcar / desmarcar favorito
  toggleFavorite(id: number) {
    const activities = this.getActivities().map(a => {
      if (a.id === id) {
        a.favorito = !a.favorito;
      }
      return a;
    });
    this.saveActivities(activities);
  }

  // 🔹 Obter só favoritos
  getFavorites(): Activity[] {
    return this.getActivities().filter(a => a.favorito);
  }
}
