import { Routes } from '@angular/router';
import { tabsRoutes } from './pages/tabs/tabs.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
  path: 'home',
  loadComponent: () =>
    import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'tabs',
    children: tabsRoutes,
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.page').then((m) => m.RegisterPage),
  },
  {
    path: 'recover',
    loadComponent: () => import('./pages/recover/recover.page').then( m => m.RecoverPage)
  },
  {
    path: 'statistic',
    loadComponent: () => import('./pages/statistic/statistic.page').then( m => m.StatisticPage)
  },
  {
    path: 'historico',
    loadComponent: () => import('./pages/historico/historico.page').then( m => m.HistoricoPage)
  },


];
