import { Routes } from '@angular/router';

export const ANOTACOES_ROUTES: Routes = [
	{
		path: '',
		loadComponent: () => import('./views/notas/notas.component').then((c) => c.NotasComponent),
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: '',
	},
];
