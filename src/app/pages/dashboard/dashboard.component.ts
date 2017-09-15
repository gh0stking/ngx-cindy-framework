import { Component } from '@angular/core';
import { CindyConfirmationService } from '../../theme/services/cindyConfirmDialog/cindyConfirmation.service';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    cities: Array<any>;
    items: Array<any>;
    patients: Array<any>;
    patientColumns: Array<any>;
    user: any = {};

    constructor(
        private confirmService: CindyConfirmationService,
    ) {
        this.getCities();
        this.getItems();
    }

    getCities() {
        this.cities = [];
        this.cities.push({ label: 'Select City', value: null });
        this.cities.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
        this.cities.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
        this.cities.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
        this.cities.push({ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } });
        this.cities.push({ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } });
    }

    getItems() {
        this.items = [
            {
                label: 'Update', icon: 'fa-refresh', command: () => {
                    console.log('Update');
                }
            },
            {
                label: 'Delete', icon: 'fa-close', command: () => {
                    console.log('Delete');
                }
            },
            { label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io' },
            { label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming'] }
        ];
    }

    confirm() {
        this.confirmService.confirm({
            header: '提示',
            message: 'Are you sure that you want to perform this action?',
            accept: () => {
                console.log('clicked accept button.');
            },
            reject: () => {
                console.log('clicked reject button.');
            }
        });
    }

    delete() {

    }

}