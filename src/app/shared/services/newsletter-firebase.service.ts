import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class NewsletterFirebaseService {
  firestore: Firestore = inject(Firestore);
  itemCollection = collection(this.firestore, 'newsletter');
  constructor() {}

  getData() {
    return collectionData(this.itemCollection);
  }
}
