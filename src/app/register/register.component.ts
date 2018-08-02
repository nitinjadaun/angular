import { Component, OnInit,Input } from '@angular/core';
import { DataService } from "./../data.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    name:string;
    email:string;
    password:string;
    success_mes:string;
    err_mes:string;
    signUpForm: FormGroup;

    constructor(private data: DataService) {
        this.name = '';
        this.email = '';
        this.password = '';
    }

    ngOnInit() {
    
    }
    /*
    *Register uswer
    */
    onRegister(){
        this.data.register(this.email,this.password)
        .then( data => {
            this.data.addUser(this.name, data.user.uid);
            this.success_mes = "User registered Successfully!";
        })
        .catch( err => {
            console.log(err.message)
            this.err_mes = err.message;
        });
    }

    /*
    *    check password
    */
    customValidators (password:string,confirmedPassword:string):any{
        if(password==confirmedPassword){
            return true;
        } else{
            return false;
        }

    }

}
