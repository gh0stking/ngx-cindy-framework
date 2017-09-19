import { Component, Input, } from '@angular/core';

@Component({
    selector: 'c-column',
    template: `
        <p-column 
            [field]="field" 
            [header]="header"
            
            [hidden]="hidden">
        </p-column>
    `
})
export class CindyColumn {
    @Input() field: string;
    @Input() sortField: string;
    @Input() filterField: string;
    @Input() header: string;
    @Input() footer: string;
    @Input() sortable: any = false;
    @Input() sortFunction: Function;
    @Input() editable: boolean = false;
    @Input() filter: boolean = false;
    @Input() filterMatchMode: string;
    @Input() filterType: string = "text";
    @Input() filterPlaceholder: string;
    @Input() filterMaxlength: number;
    @Input() rowspan: string;
    @Input() colspan: string;
    @Input() style: any;
    @Input() styleClass: string;
    @Input() tableStyle: string;
    @Input() tableStyleClass: string;
    @Input() hidden: boolean = false;
    @Input() expander: boolean = false;
    @Input() selectionMode: string;
    @Input() frozen: boolean = false;
}