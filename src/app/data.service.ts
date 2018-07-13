import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor() { }
    getData() {
        return {
            "key1": "Nitin",
            "key2": "Kumar"
        };
    }
}
