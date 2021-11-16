import { Component, OnInit } from '@angular/core';
import { FireBaseService } from './providers/services/fire-base.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'fire-angular-test';
    users: any = [];
    displayedColumns: string[] = ['no', 'name', 'mail', 'role'];
    dataSource: any;
    constructor(private service: FireBaseService) {
    }
    ngOnInit() {
        this.service.getUsers().forEach((res: any) => {
            console.log(res)
            this.users = res;
            this.dataSource = res;
        })
    }
}
