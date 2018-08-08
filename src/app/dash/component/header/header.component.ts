import { Component, OnInit } from '@angular/core';
import { AuthService } from "./../../../auth.service";
import  {Router}from "@angular/router";
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    title : string = 'MyApp';
    constructor(private authService:AuthService,private router:Router) { }

    ngOnInit() {
    }
logout(){
    console.log('i am here');
    this.authService.logout();
    this.router.navigate(['/login']);
}
}
