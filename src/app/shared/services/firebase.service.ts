import { Injectable, inject } from '@angular/core';
import {
	CollectionReference,
	Firestore,
	collection,
	collectionData,
} from '@angular/fire/firestore';

@Injectable({
	providedIn: 'root',
})
export abstract class FirebaseService {
	firestore: Firestore;
	itemCollection: CollectionReference;

	constructor(collectionName: string) {
		this.firestore = inject(Firestore);
		this.itemCollection = collection(this.firestore, collectionName);
	}

	getData() {
		return collectionData(this.itemCollection);
	}
}
