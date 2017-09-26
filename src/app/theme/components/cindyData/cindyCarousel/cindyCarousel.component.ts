import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'c-carousel',
    template: `
        <p-carousel 
            [value]="items"
            [numVisible]="numVisible"
            [firstVisible]="firstVisible"
            [headerText]="headerText"
            [effectDuration]="effectDuration"
            [circular]="circular"
            [breakpoint]="breakpoint"
            [responsive]="responsive"
            [autoplayInterval]="autoplayInterval"
            [easing]="easing"
            [pageLinks]="pageLinks"
            [style]="style"
            [styleClass]="styleClass"
            (onPage)="onPageEvent($event)">
            <ng-content></ng-content>
        </p-carousel>
    `
})
export class CindyCarousel {
    @Input() value: any[];
    @Input() numVisible: number = 3;
    @Input() firstVisible: number = 0;
    @Input() headerText: string;
    @Input() effectDuration: any = 500;
    @Input() circular: boolean = false;
    @Input() breakpoint: number = 560;
    @Input() responsive: boolean = true;
    @Input() autoplayInterval: number = 0;
    @Input() easing: string = "ease-out";
    @Input() pageLinks: number = 3;
    @Input() style: string;
    @Input() styleClass: string;

    @Output() onPage: EventEmitter<any> = new EventEmitter();

    onPageEvent(event) {
        this.onPage.emit(event);
    }
}