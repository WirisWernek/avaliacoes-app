import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardNewsletterComponent } from './components/card-newsletter/card-newsletter.component';
import { NewsletterRoutingModule } from './newsletter-routing.module';
import { NewsletterFirebaseStore } from './stores/newsletter-firebase.store';
import { NewsletterComponent } from './views/newsletter/newsletter.component';

@NgModule({
	declarations: [NewsletterComponent, CardNewsletterComponent],
	imports: [CommonModule, NewsletterRoutingModule],
	providers: [NewsletterFirebaseStore],
})
export class NewsletterModule {}
