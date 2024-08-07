import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-bottom-nav',
	templateUrl: './bottom-nav.component.html',
	styleUrls: ['./bottom-nav.component.scss'],
	standalone: true,
})
export class BottomNavComponent {
	constructor(private router: Router) {}

	navigateReviews() {
		this.router.navigate(['/reviews']);
	}
	navigateNotes() {
		this.router.navigate(['/notes']);
	}
	navigateNewsletter() {
		this.router.navigate(['/newsletter']);
	}
	navigateEmails() {
		this.router.navigate(['/emails']);
	}
}
