import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsletterFirebaseService } from 'src/app/shared/services/newsletter-firebase.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {
	newsletter$: Observable<any[]>;

	constructor(private newsletterService: NewsletterFirebaseService) {
	  this.newsletter$ = newsletterService.getData();
	}
}
