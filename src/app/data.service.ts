import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor( private afauth: AngularFireAuth, private db: AngularFirestore) { }
    getData() {
        return {
            "key1": "Nitin",
            "key2": "Kumar"
        };
    }

    register( email: string, password: string ): Promise<any>{
        return new Promise( ( resolve , reject ) => {
            this.afauth.auth.createUserWithEmailAndPassword(email, password)
            .then( data => {
                resolve(data);
            })
            .catch( err => {
                reject(err);
            });
        });
    }
     addUser(name:string, uid:string) {
        const newCoder:any = { 'name': name, 'role': 'subscriber','user_id': uid };
        this.db.collection('users').add( newCoder )
        .then( userData => {
            //resolve(userData);
            console.log(userData);
        }).catch(err => {
            console.log(err);
        });
    }
}
