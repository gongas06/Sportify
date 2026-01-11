import { Routes } from '@angular/router';
import { tabsRoutes } from './pages/tabs/tabs.routes';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'tabs/statistic',
    pathMatch: 'full',
  },

  // ---------- AUTENTICAÇÃO ----------
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then(m => m.HomePage),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then(m => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.page').then(m => m.RegisterPage),
  },
  {
    path: 'recover',
    loadComponent: () =>
      import('./pages/recover/recover.page').then(m => m.RecoverPage),
  },

  // ---------- APP COM TABS ----------
  {
    path: 'tabs',
    loadComponent: () =>
      import('./pages/tabs/tabs.page').then(m => m.TabsPage),
    children: tabsRoutes,
  },

  // ---------- PÁGINAS FORA DOS TABS ----------
  {
    path: 'criar-atividade',
    loadComponent: () =>
      import('./pages/criar-atividade/criar-atividade.page')
        .then(m => m.CriarAtividadePage),
  },
  {
    path: 'personalizacao',
    loadComponent: () =>
      import('./pages/personalizacao/personalizacao.page')
        .then(m => m.PersonalizacaoPage),
  },
];

