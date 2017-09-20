import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TreeNode } from '../../common/treenode';

@Component({
    selector: 'c-organizationChart',
    template: `
        <p-organizationChart 
            [value]="value"
            [style]="style"
            [styleClass]="styleClass"
            selectionMode="{{selectionMode}}"
            [(selection)]="selection"
            (onNodeSelect)="onNodeSelectEvent($event)"
            (onNodeUnselect)="onNodeUnselectEvent($event)">
            <ng-content></ng-content>
        </p-organizationChart>
    `
})
export class CindyOrgChart {
    @Input() value: TreeNode[];
    @Input() style: string;
    @Input() styleClass: string;
    @Input() selectionMode: string;
    @Input() selection: any;

    @Output() onNodeSelect: EventEmitter<any> = new EventEmitter();
    @Output() onNodeUnselect: EventEmitter<any> = new EventEmitter();

    onNodeSelectEvent(event) {
        this.onNodeSelect.emit(event);
    }

    onNodeUnselectEvent(event) {
        this.onNodeUnselect.emit(event);
    }
}