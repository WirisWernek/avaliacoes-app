import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class ReviewsFirebaseService {
  firestore: Firestore = inject(Firestore);
  itemCollection = collection(this.firestore, 'reviews');

  constructor() {}

  getData() {
    return collectionData(this.itemCollection);
  }
}
