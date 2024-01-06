import { Injectable } from '@angular/core';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Injectable()
export class EmailFirebaseStore extends FirebaseService {
	constructor() {
		super('emails');
	}
}