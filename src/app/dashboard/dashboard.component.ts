import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    money :number = 2500;

    data:any = '';

    ngOnInit() {
    }
    constructor(private ds: DataService) {
        this.data = this.ds.getData();
        console.log(this.data);
    }

}
