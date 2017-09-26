import { Component, Input, Output, EventEmitter, ContentChild, ViewChild } from '@angular/core';
import { CindyTemplate } from '../../../directives/common/cindyTemplate.directive';

@Component({
    selector: 'c-pickList',
    template: `
        <p-pickList 
            [source]="source"
            [target]="target"
            [sourceHeader]="sourceHeader"
            [targetHeader]="targetHeader"
            [filterBy]="filterBy"
            [dragdrop]="dragdrop"
            [dragdropScope]="dragdropScope"
            [style]="style"
            [styleClass]="styleClass"
            [sourceStyle]="sourceStyle"
            [targetStyle]="targetStyle"
            [responsive]="responsive"
            [showSourceControls]="showSourceControls"
            [showTargetControls]="showTargetControls"
            [metaKeySelection]="metaKeySelection"
            [sourceFilterPlaceholder]="sourceFilterPlaceholder"
            [targetFilterPlaceholder]="targetFilterPlaceholder"
            (onMoveToTarget)="onMoveToTargetEvent($event)"
            (onMoveToSource)="onMoveToSourceEvent($event)"
            (onMoveAllToTarget)="onMoveAllToTargetEvent($event)"
            (onMoveAllToSource)="onMoveAllToSourceEvent($event)"
            (onSourceReorder)="onSourceReorderEvent($event)"
            (onTargetReorder)="onTargetReorderEvent($event)">
            <ng-content [ngTemplateOutlet]='template'></ng-content>
        </p-pickList>
    `
})
export class CindyPickList {
    @ContentChild(CindyTemplate) template: CindyTemplate;

    @Input() source: any[];
    @Input() target: any[];
    @Input() sourceHeader: string;
    @Input() targetHeader: string;
    @Input() filterBy: string;
    @Input() dragdrop: boolean;
    @Input() dragdropScope: string;
    @Input() style: string;
    @Input() styleClass: string;
    @Input() sourceStyle: string;
    @Input() targetStyle: string;
    @Input() responsive: boolean;
    @Input() showSourceControls: boolean = true;
    @Input() showTargetControls: boolean = true;
    @Input() metaKeySelection: boolean = true;
    @Input() sourceFilterPlaceholder: string;
    @Input() targetFilterPlaceholder: string;

    @Output() onMoveToTarget: EventEmitter<any> = new EventEmitter();
    @Output() onMoveToSource: EventEmitter<any> = new EventEmitter();
    @Output() onMoveAllToTarget: EventEmitter<any> = new EventEmitter();
    @Output() onMoveAllToSource: EventEmitter<any> = new EventEmitter();
    @Output() onSourceReorder: EventEmitter<any> = new EventEmitter();
    @Output() onTargetReorder: EventEmitter<any> = new EventEmitter();

    onMoveToTargetEvent(event) {
        this.onMoveToTarget.emit(event);
    }

    onMoveToSourceEvent(event) {
        this.onMoveToTarget.emit(event);
    }

    onMoveAllToTargetEvent(event) {
        this.onMoveToTarget.emit(event);
    }

    onMoveAllToSourceEvent(event) {
        this.onMoveToTarget.emit(event);
    }

    onSourceReorderEvent(event) {
        this.onMoveToTarget.emit(event);
    }

    onTargetReorderEvent(event) {
        this.onMoveToTarget.emit(event);
    }
}