import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private title$ = new Subject<string>;

  getTitle(){
	return this.title$.asObservable();
  }

  setTitle(title: string){
	this.title$.next(title);
  }
}
