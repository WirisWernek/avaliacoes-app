import { Routes } from '@angular/router';

export const NEWSLETTER_ROUTES: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./views/newsletter/newsletter.component').then((c) => c.NewsletterComponent),
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: '',
	},
];

