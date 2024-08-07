import { Routes } from '@angular/router';

export const EMAIL_ROUTES: Routes = [
	{
		path: '',
		loadComponent: () => import('./views/email/email.component').then((c) => c.EmailComponent),
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: '',
	},
];
