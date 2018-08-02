import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email: string;
    password :string;
    collection:any;
    typeOfPassword: boolean = true;
    constructor(private afauth: AngularFireAuth, private db: AngularFirestore,private router: Router ) {
        this.email = '';
        this.password = '';
        this.collection = db.collection('users');
    }

    ngOnInit() {
    }

    changePasswordToText () {
        this.typeOfPassword = !this.typeOfPassword;
    }

    onSubmit() {
        console.log("doe");
        this.afauth.auth.signInWithEmailAndPassword(this.email,this.password)
        .then( data => {
            console.log(data.user.uid);
            this.getUserRole( data.user.uid ).subscribe( data => {
                console.log(data);
                if(data[0]['role'] == 'admin') {
                    this.router.navigate(['/dash/home']);
                } else {
                    this.router.navigate(['/dash/dashboard']);
                }
            });

        })
        .catch( err => {
            console.log(err);
        });
    }
    getUserRole(uid:string){
        return this.db.collection('users', ref => ref.where('user_id', '==', uid)).valueChanges();
    }

}
