import { Component } from '@angular/core';

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