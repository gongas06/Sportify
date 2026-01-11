import { Routes } from '@angular/router';

export const tabsRoutes: Routes = [
  {
    path: 'statistic',
    loadComponent: () =>
      import('../statistic/statistic.page').then(m => m.StatisticPage),
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('../menu/menu.page').then(m => m.MenuPage),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('../profile/profile.page').then(m => m.ProfilePage),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('../settings/settings.page').then(m => m.SettingsPage),
  },

  // 👉 páginas abertas PELO MENU
  {
    path: 'historico',
    loadComponent: () =>
      import('../historico/historico.page').then(m => m.HistoricoPage),
  },
  {
    path: 'favoritos',
    loadComponent: () =>
      import('../favoritos/favoritos.page').then(m => m.FavoritosPage),
  },
  {
    path: 'objetivos',
    loadComponent: () =>
      import('../objetivos/objetivos.page').then(m => m.ObjetivosPage),
  },
  {
    path: 'mapa-atividade',
    loadComponent: () =>
      import('../mapa-atividade/mapa-atividade.page')
        .then(m => m.MapaAtividadePage),
  },
  {
    path: 'estado-fisico',
    loadComponent: () =>
      import('../estado-fisico/estado-fisico.page')
        .then(m => m.EstadoFisicoPage),
  },
  {
    path: 'evolucao',
    loadComponent: () =>
      import('../evolucao/evolucao.page').then(m => m.EvolucaoPage),
  },
  {
    path: 'lembretes',
    loadComponent: () =>
      import('../lembretes/lembretes.page').then(m => m.LembretesPage),
  },
  {
    path: 'atividade-sugerida',
    loadComponent: () =>
      import('../atividade-sugerida/atividade-sugerida.page')
        .then(m => m.AtividadeSugeridaPage),
  },
];

