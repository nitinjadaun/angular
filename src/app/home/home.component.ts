import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    states = [
        { id: 1, name: 'Haryana', zip: 121102 },
        { id: 2, name: 'Punjab', zip: 144417  },
        { id: 3, name: 'UP', zip: 160101  },
        { id: 4, name: 'HP', zip: 789456  },
        { id: 5, name: 'MP', zip: 123456  },
        { id: 6, name: 'Gujrat', zip: 1309431  }
    ];
    inpuValue:number = 2;
    stateName: number = 1;
    inputZip: number = 121102;

    stateNameChanged(el) {
    console.log(this.states[el]);
        switch( el ){
            case 1:
                this.inputZip = 121102;
                break;

            case 2:
                this.inputZip = 144417;
                break;

            case 3:
                this.inputZip = 144417;
                break;

            case 4:
                this.inputZip = 144417;
                break;

            case 5:
                this.inputZip = 789456;
                break;

            case 6:
                this.inputZip = 123456;
                break;

            default:
                this.inputZip = 160101;
        }
    }

    constructor() { }

    ngOnInit() {
    }

}
