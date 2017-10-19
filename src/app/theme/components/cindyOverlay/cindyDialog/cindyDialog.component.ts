import { Component, Input, Output, EventEmitter, ContentChild } from '@angular/core';
import { CindyHeader, CindyFooter } from '../../common/shared';

@Component({
    selector: 'c-dialog',
    template: `
        <p-dialog [(visible)]='visible'
            [header]='header'
            [draggable]='draggable'
            [resizable]='resizable'
            [minWidth]='minWidth'
            [minHeight]='minHeight'
            [width]='width'
            [height]='height'
            [contentStyle]='contentStyle'
            [modal]='modal'
            [closeOnEscape]='closeOnEscape'
            [dismissableMask]='dismissableMask'
            [rtl]='rtl'
            [closable]='closable'
            [responsive]='responsive'
            [breakpoint]='breakpoint'
            [appendTo]='appendTo'
            [style]='style'
            [styleClass]='styleClass'
            [showHeader]='showHeader'
            [positionLeft]='positionLeft'
            [positionTop]='positionTop'
            (onShow)='onShowEvent()'
            (onHide)='onHideEvent()'>
            <p-header *ngIf='cindyHeader'>
                <ng-content select='c-header'></ng-content>
            </p-header>
            <ng-content class="cindy-content"></ng-content>
            <p-footer *ngIf='cindyFooter'>
                <ng-content select='c-footer'></ng-content>
            </p-footer>
        </p-dialog>
    `,
    styleUrls: ['./cindyDialog.component.scss']
})
export class CindyDialog {
    @ContentChild(CindyHeader) cindyHeader;
    @ContentChild(CindyFooter) cindyFooter;
    @Input() header: string;
    @Input() draggable: boolean = true;
    @Input() resizable: boolean = true;
    @Input() minWidth: number = 150;
    @Input() minHeight: number = 150;
    @Input() width: number = 300;
    @Input() height: number;
    @Input() contentStyle: any;
    @Input() modal: boolean = false;
    @Input() closeOnEscape: boolean = true;
    @Input() dismissableMask: boolean = false;
    @Input() rtl: boolean = false;
    @Input() closable: boolean = true;
    @Input() responsive: boolean = true;
    @Input() breakpoint: number = 600;
    @Input() appendTo: any;
    @Input() style: string;
    @Input() styleClass: string;
    @Input() showHeader: boolean = true;
    @Input() positionLeft: number;
    @Input() positionTop: number;
    _visible: boolean = false;

    @Output() onShow: EventEmitter<any> = new EventEmitter();
    @Output() onHide: EventEmitter<any> = new EventEmitter();

    onShowEvent() {
        this.onShow.emit();
    }

    onHideEvent() {
        this.onHide.emit();
    }

    @Input() get visible(): boolean {
        return this._visible;
    }

    set visible(val: boolean) {
        this._visible = val;
    }

}