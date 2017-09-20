export class Column {
    field: string;
    header: string;
    sortField?: string;
    filterField?: string;
    footer?: string;
    sortable?: boolean = false;
    sortFunction?: Function;
    editable?: boolean = false;
    filter?: boolean = false;
    filterMatchMode?: string;
    filterType?: string = "text";
    filterPlaceholder?: string;
    filterMaxlength?: number;
    rowspan?: string;
    colspan?: string;
    style?: any;
    styleClass?: string;
    tableStyle?: string;
    tableStyleClass?: string;
    hidden?: boolean = false;
    expander?: boolean = false;
    selectionMode?: string;
    frozen?: boolean = false;
}