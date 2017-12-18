import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommonService {

  constructor(private db: AngularFireDatabase) { }
  
  getCourses(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

}
