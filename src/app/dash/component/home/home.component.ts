import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from "./../../../data.service";
import { Router } from '@angular/router';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    profileForm = new FormGroup({
        name: new FormControl(''),
        position: new FormControl(''),
        office: new FormControl(''),
        age: new FormControl(''),
        start_date: new FormControl(''),
        salary: new FormControl(''),

    });

    constructor(private ds: DataService ,private router: Router) { }

    ngOnInit() {
    }
    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.log(this.profileForm.value);
        this.ds.addInformation(this.profileForm.value);
        this.router.navigate(['/dash/dashboard']);
    }
}
