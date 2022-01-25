import {Injectable} from '@angular/core';
import {HttpClient,	HttpErrorResponse,	HttpHeaders} from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Globals } from 'src/app/globals';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable()
export class UserSvc {
collectionName = 'Profil';

	private headers = new HttpHeaders({	'Content-Type': 'application/json' });

	constructor(private g: Globals, private firebase: AngularFireDatabase) {

	}

	 create_Profil(record) {
    /*  console.log(record);  */
    
   
    return this.firebase.database.ref(this.collectionName).push(record)
    
  
  }
  create_pay(record) {
    /*  console.log(record);  */
    
   
    return this.firebase.database.ref('Voyages').push(record)
    
  
  }


  read_students() {
    //return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  update_student(recordID, record) {
  //  this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  }

  delete_student(record_id) {
   // this.firestore.doc(this.collectionName + '/' + record_id).delete();
  }
	
	getUsers() {
		let options = {	headers: this.headers,withCredentials: true	};
		let data = {};
		//return this.http.post(this.g.baseUrl +  '/api/article/getArticles', data, options);
	}
	


}