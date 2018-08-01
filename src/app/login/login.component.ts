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
    constructor(private afauth: AngularFireAuth, private db: AngularFirestore,private router: Router ) {
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
            this.router.navigate(['/dash/home']);
        })
        .catch( err => {
            console.log(err);
        });
    }

}
