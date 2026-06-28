import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'signals',
    loadComponent: () => import('./pages/signals/signals').then((m) => m.Signals),
  },
  {
    path: 'components',
    loadComponent: () =>
      import('./pages/components-section/components-section').then((m) => m.ComponentsSection),
  },
  {
    path: 'templates',
    loadComponent: () => import('./pages/templates/templates').then((m) => m.Templates),
  },
  {
    path: 'directives',
    loadComponent: () => import('./pages/directives/directives').then((m) => m.Directives),
  },
  {
    path: 'di',
    loadComponent: () => import('./pages/di/di').then((m) => m.Di),
  },
];
