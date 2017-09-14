import { Component } from '@angular/core';

@Component({
    selector: 'c-dataTable',
    template: `
    <p-dataTable [value]="value">
        <p-column *ngFor='let c of columns' field="{{c.field}}" header="{{c.header}}"></p-column>
    </p-dataTable>
    `
})
export class cindyDataTable {
    value: Array<any>;
}