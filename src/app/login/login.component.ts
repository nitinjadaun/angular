import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

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
    has_email_value: boolean = false;
    has_pass_value: boolean = false;
    constructor(private afauth: AngularFireAuth, private db: AngularFirestore,private router: Router,private authService:AuthService ) {
        this.email = '';
        this.password = '';
        this.collection = db.collection('users');
    }

    ngOnInit() {
    }

    changePasswordToText () {
        this.typeOfPassword = !this.typeOfPassword;
    }
    changeEmailValue(){
        this.has_email_value = this.email.length >=1  ? true : false;
        console.warn(this.has_email_value);
    }
    changePasswordValue(){
        this.has_pass_value = this.password.length >=1 ? true : false;
    }
    onSubmit() {
        console.log("doe");
        this.afauth.auth.signInWithEmailAndPassword(this.email,this.password)
        .then( data => {
            console.log(data);
            this.authService.setLoggedInStatus(true);

            this.afauth.auth.onIdTokenChanged(
                (token: any) => {
                    if (token) {
                        sessionStorage.userToken = token.qa;
                    }
                }
            )
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
