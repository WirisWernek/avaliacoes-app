import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'reviews',
		loadChildren: () => import('./modules/avaliacoes/avaliacoes.module').then(m => m.AvaliacoesModule)
	},
	{
		path: 'notes',
		loadChildren: () => import('./modules/notas/notas.module').then(m => m.NotasModule)
	},
	{
		path: 'newsletter',
		loadChildren: () => import('./modules/newsletter/newsletter.module').then(m => m.NewsletterModule)
	},
	{
		path: 'emails',
		loadChildren: () => import('./modules/emails/emails.module').then(m => m.EmailsModule)
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: ''
	}
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
