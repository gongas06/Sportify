import { Routes } from '@angular/router';
import { tabsRoutes } from './pages/tabs/tabs.routes';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
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
    children: tabsRoutes,
  },

  // ---------- PÁGINAS SOLTAS ----------
  {
    path: 'statistic',
    loadComponent: () =>
      import('./pages/statistic/statistic.page').then(m => m.StatisticPage),
  },
  {
    path: 'historico',
    loadComponent: () =>
      import('./pages/historico/historico.page').then(m => m.HistoricoPage),
  },
  {
    path: 'evolucao',
    loadComponent: () =>
      import('./pages/evolucao/evolucao.page').then(m => m.EvolucaoPage),
  },
  {
    path: 'favoritos',
    loadComponent: () =>
      import('./pages/favoritos/favoritos.page').then(m => m.FavoritosPage),
  },
  {
    path: 'criar-atividade',
    loadComponent: () =>
      import('./pages/criar-atividade/criar-atividade.page')
        .then(m => m.CriarAtividadePage),
  },
  {
    path: 'mapa-atividade',
    loadComponent: () =>
      import('./pages/mapa-atividade/mapa-atividade.page')
        .then(m => m.MapaAtividadePage),
  },
  {
    path: 'estado-fisico',
    loadComponent: () =>
      import('./pages/estado-fisico/estado-fisico.page')
        .then(m => m.EstadoFisicoPage),
  },
  {
    path: 'objetivos',
    loadComponent: () =>
      import('./pages/objetivos/objetivos.page')
        .then(m => m.ObjetivosPage),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/profile/profile.page').then(m => m.ProfilePage),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/settings/settings.page').then(m => m.SettingsPage),
  },
  {
    path: 'lembretes',
    loadComponent: () => import('./pages/lembretes/lembretes.page').then( m => m.LembretesPage)
  },
  {
    path: 'personalizacao',
    loadComponent: () =>
      import('./pages/personalizacao/personalizacao.page').then(m => m.PersonalizacaoPage),
  },
];
