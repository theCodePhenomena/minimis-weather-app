import { Injectable } from '@angular/core';
import { AngularFireLiteFirestore } from 'angularfire-lite';
import { switchMap, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FbService {

  constructor(private fireService: AngularFireLiteFirestore) { }

  getCities() {
    return this.auth.uid().pipe(switchMap((uid) => {
      return this.fireService.read(`${uid}`);
    }));
  }  

  addCity(name: string) {
    return this.auth.uid()
      .pipe(switchMap((uid) => {
        return this.fireService
          .write(`${uid}/${name}`, {name, added: new Date()})
          .pipe(first());
      }), first());
  }
}
