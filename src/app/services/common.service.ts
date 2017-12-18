import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommonService {
  userList: string = 'https://reqres.in/api/users?page=2';
  constructor(
    private db: AngularFireDatabase,
    private http: HttpClient
  ) { }
  
  getCourses(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  getUserListing(): any {
    return this.http.get(this.userList);
  }

}
