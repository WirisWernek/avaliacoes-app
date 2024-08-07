import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

export const APP_ROUTES: Routes = [
	{
		path: 'reviews',
		component: LayoutComponent,
		loadChildren: () => import('./modules/avaliacoes/avaliacoes.routes').then((r) => r.routes),
	},
	{
		path: 'notes',
		component: LayoutComponent,
		loadChildren: () => import('./modules/notas/notas.routes').then((r) => r.ANOTACOES_ROUTES),
	},
	{
		path: 'newsletter',
		component: LayoutComponent,
		loadChildren: () =>
			import('./modules/newsletter/newsletter.routes').then((r) => r.NEWSLETTER_ROUTES),
	},
	{
		path: 'emails',
		component: LayoutComponent,
		loadChildren: () => import('./modules/emails/emails.routes').then((r) => r.EMAIL_ROUTES),
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: 'reviews',
	},
];
