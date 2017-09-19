import { Component, Input } from '@angular/core';

@Component({
    selector: 'c-toolbar',
    template: `
        <p-toolbar 
            [style]="style"
            [styleClass]="styleClass">
            <ng-content></ng-content>
        </p-toolbar>
    `
})
export class CindyToolbar {
    @Input() style: string;
    @Input() styleClass: string;
}