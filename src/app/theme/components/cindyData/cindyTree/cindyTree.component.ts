import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'c-tree',
    template: `
        <p-tree 
            [value]="value"
            [selectionMode]="selectionMode"
            [selection]="selection"
            [style]="style"
            [styleClass]="styleClass"
            [contextMenu]="contextMenu"
            [metaKeySelection]="metaKeySelection"
            [propagateSelectionUp]="propagateSelectionUp"
            [propagateSelectionDown]="propagateSelectionDown"
            [loading]="loading"
            [loadingIcon]="loadingIcon"
            (onNodeSelect)="onNodeSelectEvent($event)"
            (onNodeUnselect)="onNodeUnselectEvent($event)"
            (onNodeExpand)="onNodeExpandEvent($event)"
            (onNodeCollapse)="onNodeCollapseEvent($event)"
            (onNodeContextMenuSelect)="onNodeContextMenuSelectEvent($event)"
            (onNodeDrop)="onNodeDropEvent($event)">
            <ng-content></ng-content>
        </p-tree>
    `
})
export class CindyTree {
    @Input() value: Array<any>;
    @Input() selectionMode: string;
    @Input() selection: any;
    @Input() style: string;
    @Input() styleClass: string;
    @Input() contextMenu: any;
    @Input() orientation: string = "vertical";
    @Input() metaKeySelection: boolean = true;
    @Input() propagateSelectionUp: boolean = true;
    @Input() propagateSelectionDown: boolean = true;
    @Input() loading: boolean = false;
    @Input() loadingIcon: string = "fa-circle-o-notch";

    @Output() onNodeSelect: EventEmitter<any> = new EventEmitter();
    @Output() onNodeUnselect: EventEmitter<any> = new EventEmitter();
    @Output() onNodeExpand: EventEmitter<any> = new EventEmitter();
    @Output() onNodeCollapse: EventEmitter<any> = new EventEmitter();
    @Output() onNodeContextMenuSelect: EventEmitter<any> = new EventEmitter();
    @Output() onNodeDrop: EventEmitter<any> = new EventEmitter();

    onNodeSelectEvent(event) {
        this.onNodeSelect.emit(event);
    }

    onNodeUnselectEvent(event) {
        this.onNodeUnselect.emit(event);
    }

    onNodeExpandEvent(event) {
        this.onNodeExpand.emit(event);
    }

    onNodeCollapseEvent(event) {
        this.onNodeCollapse.emit(event);
    }

    onNodeContextMenuSelectEvent(event) {
        this.onNodeContextMenuSelect.emit(event);
    }

    onNodeDropEvent(event) {
        this.onNodeDrop.emit(event);
    }
}