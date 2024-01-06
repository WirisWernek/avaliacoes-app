import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsletterRoutingModule } from './newsletter-routing.module';
import { NewsletterComponent } from './views/newsletter/newsletter.component';
import { CardNewsletterComponent } from './components/card-newsletter/card-newsletter.component';


@NgModule({
  declarations: [
    NewsletterComponent,
    CardNewsletterComponent
  ],
  imports: [
    CommonModule,
    NewsletterRoutingModule
  ]
})
export class NewsletterModule { }
