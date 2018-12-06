import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styles: []
})
export class TitleComponent implements OnInit {
    
    title : string;
    description: string;
    breadcumb: string;
    faIcon: string;

    constructor(private dashboardService : DashboardService) {}

    ngOnInit() {
        this.dashboardService.currentMessage.subscribe( data => {
            console.log(data);
            this.title = data.title;
            this.description = data.description;
            this.breadcumb = data.breadcumb;
            this.faIcon = `fa fa-${data.icon}`;
        });
        
    }

}
