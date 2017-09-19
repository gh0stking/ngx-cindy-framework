import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
    selector: '[cTemplate]',
    host: {
    }
})
export class CindyTemplate {
    @Input() type: string;
    @Input('pTemplate') name: string;

    constructor(public template: TemplateRef<any>) { }

    getType(): string {
        return this.name;
    }
}