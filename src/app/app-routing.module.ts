import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
	{
		path: 'reviews',
		component: LayoutComponent,
		loadChildren: () => import('./modules/avaliacoes/avaliacoes.module').then(m => m.AvaliacoesModule)
	},
	{
		path: 'notes',
		component: LayoutComponent,
		loadChildren: () => import('./modules/notas/notas.module').then(m => m.NotasModule)
	},
	{
		path: 'newsletter',
		component: LayoutComponent,
		loadChildren: () => import('./modules/newsletter/newsletter.module').then(m => m.NewsletterModule)
	},
	{
		path: 'emails',
		component: LayoutComponent,
		loadChildren: () => import('./modules/emails/emails.module').then(m => m.EmailsModule)
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: 'reviews'
	}
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
