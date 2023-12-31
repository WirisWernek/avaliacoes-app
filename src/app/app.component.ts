import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { initFlowbite } from 'flowbite';
import { Observable } from 'rxjs';

interface AvaliacaoModel {
  comentatop: string;
  nota: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'avaliacoes';
  firestore: Firestore = inject(Firestore);
  itemCollection = collection(this.firestore, 'reviews');
  avaliacoes$: Observable<any[]>;

  constructor(){
	this.avaliacoes$ = collectionData(this.itemCollection);
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
