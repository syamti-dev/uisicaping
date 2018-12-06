import { Injectable } from '@angular/core';
import { Constants } from 'src/app/classes/classes/Constants';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() {}

    isAuthenticated() : boolean {

        let data = localStorage.getItem(Constants.LOGGEDIN);
        return data == null ? false : true;

    }
}
