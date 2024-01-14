import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TitleService } from 'src/app/shared/services/title.service';
import { NewsletterFirebaseStore } from '../../stores/newsletter-firebase.store';

@Component({
	selector: 'app-newsletter',
	templateUrl: './newsletter.component.html',
	styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent {
	newsletter$: Observable<any[]>;

	constructor(
		private newsletterStore: NewsletterFirebaseStore,
		private titleService: TitleService
	) {
		this.newsletter$ = newsletterStore.getData();
		titleService.setTitle('Inscritos Newsletter');
	}
}
