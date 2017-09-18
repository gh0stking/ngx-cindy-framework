import { Component, Input } from '@angular/core';
import { Message } from 'primeng/primeng';

@Component({
    selector: 'c-messages',
    template: `
        <p-messages 
            [value]="value"
            [closable]='closable'>
        </p-messages>
    `
})
export class CindyMessages {
    @Input() value: Array<Message>;
    @Input() closable: boolean = true;
}