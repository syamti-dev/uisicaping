import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security/security.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private route : Router, private securityService :  SecurityService) { }

    ngOnInit() {
    }

    logout() {
        this.securityService.doLogout().subscribe((data) => {

            this.route.navigate(['/login']);

        }, (error) => {
            console.log(error);
        });
    }

}
