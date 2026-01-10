import { Injectable } from '@angular/core';
import { Activity } from '../models/activity.model';

const STORAGE_KEY = 'activities';

@Injectable({ providedIn: 'root' })
export class ActivityService {

  getActivities(): Activity[] {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  }

  saveActivities(activities: Activity[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(activities));
  }

  toggleFavorite(id: string) {
    const activities = this.getActivities();
    const activity = activities.find(a => a.id === id);
    if (activity) {
      activity.favorite = !activity.favorite;
      this.saveActivities(activities);
    }
  }
}
