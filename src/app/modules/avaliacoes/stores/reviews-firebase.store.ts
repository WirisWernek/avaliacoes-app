import { Injectable } from '@angular/core';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Injectable()
export class ReviewsFirebaseStore extends FirebaseService {
	constructor() {
		super('reviews');
	}
}
