import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../data.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    money :number = 2500;

    getData:any = '';
    data : any;
    ngOnInit() {
    }
    constructor(private ds: DataService,private db: AngularFirestore) {
        this.getData = this.ds.getData();
        this.data = db.collection('informations').valueChanges()
        .subscribe(
            data => {this.data = data;
            }
        );
    }

}
