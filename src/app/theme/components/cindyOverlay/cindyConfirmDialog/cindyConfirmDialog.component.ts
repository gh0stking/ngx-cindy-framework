import { Component, Input } from '@angular/core';

@Component({
    selector: 'c-confirmDialog',
    template: `
        <p-confirmDialog 
            [header]='header'
            [message]='message'
            [key]='key'
            [icon]='icon'
            [acceptLabel]='acceptLabel'
            [acceptIcon]='acceptIcon'
            [acceptVisible]='acceptVisible'
            [rejectLabel]='rejectLabel'
            [rejectIcon]='rejectIcon'
            [rejectVisible]='rejectVisible'
            [width]='width'
            [height]='height'
            [closeOnEscape]='closeOnEscape'
            [rtl]='rtl'
            [closable]='closable'
            [responsive]='responsive'
            [appendTo]='appendTo'>
        </p-confirmDialog>
    `
})
export class CindyConfirmDialog {
    @Input() header: string;
    @Input() message: string;
    @Input() key: string;
    @Input() icon: string;
    @Input() acceptLabel: string = '确定';
    @Input() acceptIcon: string = 'fa-check';
    @Input() acceptVisible: boolean = true;
    @Input() rejectLabel: string = '取消';
    @Input() rejectIcon: string = 'fa-close';
    @Input() rejectVisible: boolean = true;
    @Input() width: number = 300;
    @Input() height: number;
    @Input() closeOnEscape: boolean = true;
    @Input() rtl: boolean = false;
    @Input() closable: boolean = true;
    @Input() responsive: boolean = true;
    @Input() appendTo: any;
}