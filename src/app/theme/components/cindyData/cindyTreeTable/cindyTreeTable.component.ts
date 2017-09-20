import { Component, Input, Output, EventEmitter, ContentChildren, QueryList, AfterContentInit, ContentChild } from '@angular/core';
import { CindyColumn, CindyHeader, CindyFooter } from '../../common/shared';
import { TreeNode } from '../../common/treenode';

@Component({
    selector: 'c-treeTable',
    template: `
        <p-treeTable 
            [value]="value"
            [labelExpand]="labelExpand"
            [labelCollapse]="labelCollapse"
            [expandedIcon]="expandedIcon"
            [collapsedIcon]="collapsedIcon"
            selectionMode="{{selectionMode}}"
            [(selection)]="selection"
            [style]="style"
            [styleClass]="styleClass"
            [metaKeySelection]="metaKeySelection"
            [toggleColumnIndex]="toggleColumnIndex"
            [tableStyle]="tableStyle"
            [tableStyleClass]="tableStyleClass"
            (onNodeSelect)="onNodeSelectEvent(event)"
            (onNodeUnselect)="onNodeUnselectEvent(event)"
            (onNodeExpand)="onNodeExpandEvent(event)"
            (onNodeCollapse)="onNodeCollapseEvent(event)"
            (onContextMenuSelect)="onContextMenuSelectEvent(event)">
            <p-header *ngIf='header'>
                <ng-content select="c-header"></ng-content>
            </p-header>
            <p-column *ngFor='let c of columns'
                [field]="c.field"
                [colId]="c.colId"
                [sortField]="c.sortField"
                [filterField]="c.filterField"
                [header]="c.header"
                [footer]="c.footer"
                [sortable]="c.sortable"
                [editable]="c.editable"
                [filter]="c.filter"
                [filterMatchMode]="c.filterMatchMode"
                [filterType]="c.filterType"
                [rowspan]="c.rowspan"
                [colspan]="c.colspan"
                [styleClass]="c.styleClass"
                [hidden]="c.hidden"
                [expander]="c.expander"
                selectionMode="{{c.selectionMode}}"
                [filterPlaceholder]="c.filterPlaceholder"
                [filterMaxlength]="c.filterMaxlength"
                [frozen]="c.frozen">
            </p-column>
            <p-footer *ngIf='footer'>
                <ng-content select="c-footer"></ng-content>
            </p-footer>
        </p-treeTable>
    `
})
export class CindyTreeTable implements AfterContentInit {
    @ContentChild(CindyHeader) header: CindyHeader;
    @ContentChild(CindyFooter) footer: CindyFooter;
    @ContentChildren(CindyColumn) cols: QueryList<CindyColumn>;

    @Input() value: TreeNode[];
    @Input() labelExpand: string = "Expand";
    @Input() labelCollapse: string = "Collapse";
    @Input() expandedIcon: string = "fa-caret-down";
    @Input() collapsedIcon: string = "fa-caret-right";
    @Input() selectionMode: string;
    @Input() selection: any;
    @Input() style: string;
    @Input() styleClass: string;
    @Input() metaKeySelection: boolean = true;
    @Input() toggleColumnIndex: number = 0;
    @Input() tableStyle: string;
    @Input() tableStyleClass: string;

    @Output() onNodeSelect: EventEmitter<any> = new EventEmitter();
    @Output() onNodeUnselect: EventEmitter<any> = new EventEmitter();
    @Output() onNodeExpand: EventEmitter<any> = new EventEmitter();
    @Output() onNodeCollapse: EventEmitter<any> = new EventEmitter();
    @Output() onContextMenuSelect: EventEmitter<any> = new EventEmitter();

    columns: CindyColumn[];

    ngAfterContentInit() {
        this.initColumns();
    }

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

    onContextMenuSelectEvent(event) {
        this.onContextMenuSelect.emit(event);
    }

    initColumns() {
        this.columns = this.cols.toArray();
    }
}