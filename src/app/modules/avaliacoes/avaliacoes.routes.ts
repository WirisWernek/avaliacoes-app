import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./views/avaliacoes/avaliacoes.component').then((c) => c.AvaliacoesComponent),
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: '',
	},
];
