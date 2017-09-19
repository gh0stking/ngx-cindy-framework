import { Component, OnInit } from '@angular/core';
import { CindyConfirmationService } from '../../theme/services/cindyConfirmDialog/cindyConfirmation.service';
import { CindyMessagesService } from '../../theme/services/cindyMessages/cindyMessages.service';
import { CindyColumn } from '../../theme/models/cindyColumn.model';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    cities: Array<any>;
    items: Array<any>;
    patients: Array<any>;
    patientColumns: Array<any>;
    user: any = {};
    display: boolean = false;
    childDialogDisplay = false;
    contextMenus: Array<any>;
    barData: any;
    lineData: any;
    pieData: any;
    doughnutData: any;
    polarAreaData: any;
    radarData: any;
    msgs: any = [];
    growls: any = [];
    cars: any = [];
    carColumns: Array<CindyColumn> = [];
    loading: boolean;

    constructor(
        private messageService: CindyMessagesService,
        private confirmService: CindyConfirmationService,
    ) { }

    ngOnInit() {
        this.getCities();
        this.getItems();
        this.getContextMenus();
        this.getBarData();
        this.getLineData();
        this.getPieData();
        this.getDoughnutData();
        this.getPolarData();
        this.getRadarData();
        this.getCarColumns();

        this.loading = true;
        setTimeout(() => {
            this.getCars();
            this.loading = false;
        }, 5000);
    }

    getBarData() {
        this.barData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        }
    }

    getLineData() {
        this.lineData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#565656'
                }
            ]
        }
    }

    getPieData() {
        this.pieData = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
        };
    }

    getDoughnutData() {
        this.doughnutData = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
        };
    }

    getPolarData() {
        this.polarAreaData = {
            datasets: [{
                data: [
                    11,
                    16,
                    7,
                    3,
                    14
                ],
                backgroundColor: [
                    "#FF6384",
                    "#4BC0C0",
                    "#FFCE56",
                    "#E7E9ED",
                    "#36A2EB"
                ],
                label: 'My dataset'
            }],
            labels: [
                "Red",
                "Green",
                "Yellow",
                "Grey",
                "Blue"
            ]
        }
    }

    getRadarData() {
        this.radarData = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };
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
            message: '保存成功！',
            rejectVisible: false,
            accept: () => {
                console.log('点击了确定按钮');
            }
        });
    }

    delete() {
        this.confirmService.confirm({
            header: '提示',
            message: '确定要删除吗？',
            rejectVisible: true,
            accept: () => {
                console.log('点击了确定按钮');
            },
            reject: () => {
                console.log('点击了取消按钮');
            }
        });
    }

    showDialog() {
        this.display = true;
    }

    save() {
        this.display = false;
        this.confirm();
    }

    cancel() {
        this.display = false;
    }

    getContextMenus() {
        this.contextMenus = [
            {
                label: 'File',
                items: [{
                    label: 'New',
                    icon: 'fa-plus',
                    items: [
                        { label: 'Project' },
                        { label: 'Other' },
                    ]
                },
                { label: 'Open' },
                { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    { label: 'Undo', icon: 'fa-mail-forward' },
                    { label: 'Redo', icon: 'fa-mail-reply' }
                ]
            },
            {
                label: 'Save',
                icon: 'fa-check',
                command: () => {
                    console.log('点击了save按钮');
                }
            }
        ];
    }

    showMessages() {
        this.msgs = [];
        // this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
    }

    showGrowl() {
        this.growls = [];
        this.growls.push({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
    }

    uploadedFiles: any[] = [];

    onUpload(event) {
        for (let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    }

    getCars() {
        this.cars = [
            { vin: "dsad231ff", year: "2012", brand: "VW", color: "Orange" },
            { vin: "gwregre345", year: "2011", brand: "Audi", color: "Black" },
            { vin: "h354htr", year: "2005", brand: "Renault", color: "Gray" },
            { vin: "j6w54qgh", year: "2003", brand: "BMW", color: "Blue" },
            { vin: "hrtwy34", year: "1995", brand: "Mercedes", color: "Orange" },
            { vin: "jejtyj", year: "2005", brand: "Volvo", color: "Black" },
            { vin: "g43gr", year: "2012", brand: "Honda", color: "Yellow" },
            { vin: "greg34", year: "2013", brand: "Jaguar", color: "Orange" },
            { vin: "h54hw5", year: "2000", brand: "Ford", color: "Black" },
            { vin: "245t2s", year: "2013", brand: "Fiat", color: "Red" },
        ];
    }

    getCarColumns() {
        this.carColumns = [
            { field: 'vin', header: 'Vin', sortable: true },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color', editable: true },
        ];
    }

    handleRowSelect(event) {
        let data = event.data;
        console.log(data);
    }

}