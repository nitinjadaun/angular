import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email: string;
    password :string;
    constructor(private afauth: AngularFireAuth, private db: AngularFirestore ) {
        this.email = '';
        this.password = '';
    }

    ngOnInit() {
    }

    onSubmit() {
        console.log("doe");
        this.afauth.auth.signInWithEmailAndPassword(this.email,this.password)
        .then( data => {
        console.log(data);
        })
        .catch( err => {
        console.log(err);
        });
    }

}
