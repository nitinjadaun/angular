import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    states = [
        { id: 1, name: 'Haryana' },
        { id: 2, name: 'Punjab' },
        { id: 3, name: 'UP' },
        { id: 4, name: 'HP' },
        { id: 5, name: 'MP' },
        { id: 6, name: 'Gujrat' }
    ];
    constructor() { }

    ngOnInit() {
    }

}
