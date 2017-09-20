import { Component, Input, Output, EventEmitter, ViewChild, ContentChild, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { SortMeta } from '../../common/sortmeta';
import { FilterMetadata } from '../../common/filtermetadata';
import { CindyColumn, CindyHeader, CindyFooter } from '../../common/shared';
import { DataTable } from 'primeng/primeng';

@Component({
    selector: 'c-dataTable',
    template: `
        <p-dataTable #dt
            [value]='value'
            [rows]='rows'
            [paginator]='paginator'
            [pageLinks]='pageLinks'
            [totalRecords]='totalRecords'
            [rowsPerPageOptions]='rowsPerPageOptions'
            [alwaysShowPaginator]='alwaysShowPaginator'
            [sortMode]='sortMode'
            [sortField]='sortField'
            [sortOrder]='sortOrder'
            [defaultSortOrder]='defaultSortOrder'
            [multiSortMeta]='multiSortMeta'
            [rowGroupMode]='rowGroupMode'
            [groupField]='groupField'
            [sortableRowGroup]='sortableRowGroup'
            [expandableRowGroups]='expandableRowGroups'
            [responsive]='responsive'
            selectionMode='{{selectionMode}}'
            [headerCheckboxToggleAllPages]='headerCheckboxToggleAllPages'
            [selection]='selection'
            [editable]='editable'
            [expandableRows]='expandableRows'
            [expandedRows]='expandedRows'
            [rowExpandMode]='rowExpandMode'
            [expandedIcon]='expandedIcon'
            [collapsedIcon]='collapsedIcon'
            [globalFilter]='globalFilter'
            [filterDelay]='filterDelay'
            [lazy]='lazy'
            [resizableColumns]='resizableColumns'
            [columnResizeMode]='columnResizeMode'
            [reorderableColumns]='reorderableColumns'
            [scrollable]='scrollable'
            [scrollHeight]='scrollHeight'
            [scrollWidth]='scrollWidth'
            [virtualScroll]='virtualScroll'
            [virtualScrollDelay]='virtualScrollDelay'
            [frozenValue]='frozenValue'
            [style]='style'
            [styleClass]='styleClass'
            [contextMenu]='contextMenu'
            [csvSeparator]='csvSeparator'
            [exportFilename]='exportFilename'
            [emptyMessage]='emptyMessage'
            [paginatorPosition]='paginatorPosition'
            [rowStyleClass]='rowStyleClass'
            [rowStyleMap]='rowStyleMap'
            [rowHover]='rowHover'
            [filters]='filters'
            [metaKeySelection]='metaKeySelection'
            [dataKey]='dataKey'
            [loading]='loading'
            [loadingIcon]='loadingIcon'
            [enableLoader]='enableLoader'
            [rowTrackBy]='rowTrackBy'
            [compareSelectionBy]='compareSelectionBy'
            [first]='first'
            [immutable]='immutable'
            (selectionChange)='selectionChangeEvent($event)'
            (onRowClick)='onRowClickEvent($event)'
            (onRowSelect)='onRowSelectEvent($event)'
            (onRowUnselect)='onRowUnselectEvent($event)'
            (onRowDblclick)='onRowDblclickEvent($event)'
            (onHeaderCheckboxToggle)='onHeaderCheckboxToggleEvent($event)'
            (onContextMenuSelect)='onContextMenuSelectEvent($event)'
            (onLazyLoad)='onLazyLoadEvent($event)'
            (onColResize)='onColResizeEvent($event)'
            (onColReorder)='onColReorderEvent($event)'
            (onEditInit)='onEditInitEvent($event)'
            (onEditComplete)='onEditCompleteEvent($event)'
            (onEdit)='onEditEvent($event)'
            (onEditCancel)='onEditCancelEvent($event)'
            (onPage)='onPageEvent($event)'
            (onSort)='onSortEvent($event)'
            (onFilter)='onFilterEvent($event)'
            (valueChange)='valueChangeEvent($event)'
            (firstChange)='firstChangeEvent($event)'
            (onRowExpand)='onRowExpandEvent($event)'
            (onRowCollapse)='onRowCollapseEvent($event)'
            (onRowGroupExpand)='onRowGroupExpandEvent($event)'
            (onRowGroupCollapse)='onRowGroupCollapseEvent($event)'>
            <p-header *ngIf='header'>
                <ng-content select='c-header'></ng-content>
            </p-header>
            <p-column *ngFor='let c of columns' 
                [field]="c.field" 
                [header]="c.header"
                [sortField]="c.sortField"
                [filterField]="c.filterField"
                [footer]="c.footer"
                [sortable]="c.sortable"
                [editable]="c.editable"
                [filter]="c.filter"
                [filterMatchMode]="c.filterMatchMode"
                [filterType]="c.filterType"
                [filterPlaceholder]="c.filterPlaceholder"
                [filterMaxlength]="c.filterMaxlength"
                [rowspan]="c.rowspan"
                [colspan]="c.colspan"
                [style]="c.style"
                [styleClass]="c.styleClass"
                [hidden]="c.hidden"
                [expander]="c.expander">
                selectionMode="{{c.selectionMode}}"
                [frozen]="c.frozen"
            </p-column>
            <p-footer *ngIf='footer'>
                <ng-content select='c-footer'></ng-content>
            </p-footer>
        </p-dataTable>
    `
})
export class CindyDataTable implements AfterContentInit {
    @ContentChild(CindyHeader) header;
    @ContentChild(CindyFooter) footer;
    @ContentChildren(CindyColumn) cols: QueryList<CindyColumn>;
    columns: CindyColumn[];

    @Input() value: Array<any>;
    @Input() rows: number;
    @Input() paginator: boolean;
    @Input() pageLinks: number;
    @Input() totalRecords: number;
    @Input() rowsPerPageOptions: number[];
    @Input() alwaysShowPaginator: boolean = true;
    @Input() sortMode: string = 'single';
    @Input() sortField: string;
    @Input() sortOrder: number = 1;
    @Input() defaultSortOrder: number = 1;
    @Input() multiSortMeta: SortMeta[];
    @Input() rowGroupMode: string;
    @Input() groupField: string;
    @Input() sortableRowGroup: boolean = true;
    @Input() expandableRowGroups: boolean;
    @Input() responsive: boolean;
    @Input() selectionMode: string;
    @Input() headerCheckboxToggleAllPages: boolean;
    @Input() selection: any[];
    @Input() editable: boolean;
    @Input() expandableRows: boolean;
    @Input() expandedRows: any[];
    @Input() rowExpandMode: string = 'multiple';
    @Input() expandedIcon: string = 'fa-chevron-circle-down';
    @Input() collapsedIcon: string = 'fa-chevron-circle-right';
    @Input() globalFilter: any;
    @Input() filterDelay: number = 300;
    @Input() lazy: boolean;
    @Input() resizableColumns: boolean;
    @Input() columnResizeMode: string = 'fit';
    @Input() reorderableColumns: boolean;
    @Input() scrollable: boolean;
    @Input() scrollHeight: any;
    @Input() scrollWidth: any;
    @Input() virtualScroll: boolean;
    @Input() virtualScrollDelay: number = 500;
    @Input() frozenValue: any[];
    @Input() style: any;
    @Input() styleClass: string;
    @Input() contextMenu: any;
    @Input() csvSeparator: string = ',';
    @Input() exportFilename: string = 'download';
    @Input() emptyMessage: string = 'No records found';
    @Input() paginatorPosition: string = 'bottom';
    @Input() rowStyleClass: Function;
    @Input() rowStyleMap: any;
    @Input() rowHover: boolean;
    @Input() filters: { [s: string]: FilterMetadata; } = {};
    @Input() metaKeySelection: boolean = true;
    @Input() dataKey: string;
    @Input() loading: boolean;
    @Input() loadingIcon: string = 'fa-circle-o-notch';
    @Input() enableLoader: boolean = true;
    @Input() rowTrackBy: Function = (index: number, item: any) => item;
    @Input() compareSelectionBy: string = 'deepEquals';
    @Input() first: number = 0;
    @Input() immutable: boolean = true;

    @Input() expandedRowGroups: any[];
    @Input() headerRows: Array<any>;
    @Input() footerRows: Array<any>;
    @Input() stacked: boolean;
    @Input() frozenWidth: any;
    @Input() unfrozenWidth: any;
    @Input() tableStyle: any;
    @Input() tableStyleClass: string;
    @Input() tabindex: number = 1;
    @Input() sortFile: string;

    @Output() selectionChange: EventEmitter<any> = new EventEmitter();
    @Output() onRowClick: EventEmitter<any> = new EventEmitter();
    @Output() onRowSelect: EventEmitter<any> = new EventEmitter();
    @Output() onRowUnselect: EventEmitter<any> = new EventEmitter();
    @Output() onRowDblclick: EventEmitter<any> = new EventEmitter();
    @Output() onHeaderCheckboxToggle: EventEmitter<any> = new EventEmitter();
    @Output() onContextMenuSelect: EventEmitter<any> = new EventEmitter();
    @Output() onLazyLoad: EventEmitter<any> = new EventEmitter();
    @Output() onColResize: EventEmitter<any> = new EventEmitter();
    @Output() onColReorder: EventEmitter<any> = new EventEmitter();
    @Output() onEditInit: EventEmitter<any> = new EventEmitter();
    @Output() onEditComplete: EventEmitter<any> = new EventEmitter();
    @Output() onEdit: EventEmitter<any> = new EventEmitter();
    @Output() onEditCancel: EventEmitter<any> = new EventEmitter();
    @Output() onPage: EventEmitter<any> = new EventEmitter();
    @Output() onSort: EventEmitter<any> = new EventEmitter();
    @Output() onFilter: EventEmitter<any> = new EventEmitter();
    @Output() valueChange: EventEmitter<any[]> = new EventEmitter<any[]>();
    @Output() firstChange: EventEmitter<number> = new EventEmitter<number>();
    @Output() onRowExpand: EventEmitter<any> = new EventEmitter();
    @Output() onRowCollapse: EventEmitter<any> = new EventEmitter();
    @Output() onRowGroupExpand: EventEmitter<any> = new EventEmitter();
    @Output() onRowGroupCollapse: EventEmitter<any> = new EventEmitter();

    ngAfterContentInit() {
        this.initColumns();
    }

    initColumns() {
        this.columns = this.cols.toArray();
    }

    selectionChangeEvent(event) {
        this.selectionChange.emit(event);
    }

    onRowClickEvent(event) {
        this.onRowClick.emit(event);
    }

    onRowSelectEvent(event) {
        this.onRowSelect.emit(event);
    }

    onRowUnselectEvent(event) {
        this.onRowUnselect.emit(event);
    }

    onRowDblclickEvent(event) {
        this.onRowDblclick.emit(event);
    }

    onHeaderCheckboxToggleEvent(event) {
        this.onHeaderCheckboxToggle.emit(event);
    }

    onContextMenuSelectEvent(event) {
        this.onContextMenuSelect.emit(event);
    }

    onLazyLoadEvent(event) {
        this.onLazyLoad.emit(event);
    }

    onColResizeEvent(event) {
        this.onColResize.emit(event);
    }

    onColReorderEvent(event) {
        this.onColReorder.emit(event);
    }

    onEditInitEvent(event) {
        this.onEditInit.emit(event);
    }

    onEditCompleteEvent(event) {
        this.onEditComplete.emit(event);
    }

    onEditEvent(event) {
        this.onEdit.emit(event);
    }

    onEditCancelEvent(event) {
        this.onEditCancel.emit(event);
    }

    onPageEvent(event) {
        this.onPage.emit(event);
    }

    onSortEvent(event) {
        this.onSort.emit(event);
    }

    onFilterEvent(event) {
        this.onFilter.emit(event);
    }

    valueChangeEvent(event) {
        this.valueChange.emit(event);
    }

    firstChangeEvent(event) {
        this.firstChange.emit(event);
    }

    onRowExpandEvent(event) {
        this.onRowExpand.emit(event);
    }

    onRowCollapseEvent(event) {
        this.onRowCollapse.emit(event);
    }

    onRowGroupExpandEvent(event) {
        this.onRowGroupExpand.emit(event);
    }

    onRowGroupCollapseEvent(event) {
        this.onRowGroupCollapse.emit(event);
    }

    @ViewChild("dt") dt: DataTable;

    public reset() {
        this.dt.reset();
    }

    public exportCSV() {
        this.dt.exportCSV();
    }

    public toggleRow(data: any) {
        this.dt.toggleRow(data);
    }

}