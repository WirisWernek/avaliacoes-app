import { Injectable } from '@angular/core';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Injectable()
export class NewsletterFirebaseStore extends FirebaseService {
	constructor() {
		super('newsletter');
	}
}
