import { Component, AfterContentInit, Input, TemplateRef, Output, EventEmitter, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { CindyTemplate } from '../../directives/common/cindyTemplate.directive';

@Component({
    selector: 'c-header',
    template: `<ng-content></ng-content>`
})
export class CindyHeader { }

@Component({
    selector: 'c-footer',
    template: `
        <div class="ui-dialog-footer">
            <ng-content></ng-content>
        </div>
    `
})
export class CindyFooter { }

@Component({
    selector: 'c-content',
    template: `<ng-content></ng-content>`
})
export class CindyContent { }

@Component({
    selector: 'c-column',
    template: ``
})
export class CindyColumn implements AfterContentInit {
    @Input() field: string;
    @Input() colId: string;
    @Input() sortField: string;
    @Input() filterField: string;
    @Input() header: string;
    @Input() footer: string;
    @Input() sortable: any;
    @Input() editable: boolean;
    @Input() filter: boolean;
    @Input() filterMatchMode: string;
    @Input() filterType: string = 'text';
    @Input() rowspan: number;
    @Input() colspan: number;
    @Input() style: any;
    @Input() styleClass: string;
    @Input() hidden: boolean;
    @Input() expander: boolean;
    @Input() selectionMode: string;
    @Input() filterPlaceholder: string;
    @Input() filterMaxlength: number;
    @Input() frozen: boolean;
    @Output() sortFunction: EventEmitter<any> = new EventEmitter();
    @ContentChildren(CindyTemplate) templates: QueryList<any>;
    @ContentChild(TemplateRef) template: TemplateRef<any>;

    public headerTemplate: TemplateRef<any>;
    public bodyTemplate: TemplateRef<any>;
    public footerTemplate: TemplateRef<any>;
    public filterTemplate: TemplateRef<any>;
    public editorTemplate: TemplateRef<any>;

    ngAfterContentInit(): void {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'header':
                    this.headerTemplate = item.template;
                    break;

                case 'body':
                    this.bodyTemplate = item.template;
                    break;

                case 'footer':
                    this.footerTemplate = item.template;
                    break;

                case 'filter':
                    this.filterTemplate = item.template;
                    break;

                case 'editor':
                    this.editorTemplate = item.template;
                    break;

                default:
                    this.bodyTemplate = item.template;
                    break;
            }
        });
    }
}