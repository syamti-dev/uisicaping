import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { Breadcumb } from 'src/app/classes/classes/Breadcumb';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    
    private messageSource = new BehaviorSubject<Breadcumb>(new Breadcumb('Dashboard', 'Dashboard', 'Dashboard', 'tachometer-alt'));
    currentMessage = this.messageSource.asObservable();

    constructor() {}

    setBreadcumb(title : string, description : string, breadcumb : string, icon : string) {
        let breadcumbData = new Breadcumb(title, description, breadcumb, icon);   
        this.messageSource.next(breadcumbData);
    }
    
}