import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Schedule } from 'primeng/primeng';

@Component({
    selector: 'c-schedule',
    template: `
        <p-schedule #schedule
            [events]="events"
            [header]="header"
            [weekends]="weekends"
            [hiddenDays]="hiddenDays"
            [locale]="locale"
            [fixedWeekCount]="fixedWeekCount"
            [weekNumbers]="weekNumbers"
            [businessHours]="businessHours"
            [height]="height"
            [contentHeight]="contentHeight"
            [aspectRatio]="aspectRatio"
            [eventLimit]="eventLimit"
            [defaultDate]="defaultDate"
            [editable]="editable"
            [droppable]="droppable"
            [eventStartEditable]="eventStartEditable"
            [eventDurationEditable]="eventDurationEditable"
            [defaultView]="defaultView"
            [allDaySlot]="allDaySlot"
            [allDayText]="allDayText"
            [slotDuration]="slotDuration"
            [slotLabelInterval]="slotLabelInterval"
            [snapDuration]="snapDuration"
            [scrollTime]="scrollTime"
            [minTime]="minTime"
            [maxTime]="maxTime"
            [slotEventOverlap]="slotEventOverlap"
            [nowIndicator]="nowIndicator"
            [dragRevertDuration]="dragRevertDuration"
            [dragOpacity]="dragOpacity"
            [dragScroll]="dragScroll"
            [eventOverlap]="eventOverlap"
            [eventConstraint]="eventConstraint"
            [eventRender]="eventRender"
            [dayRender]="dayRender"
            [timezone]="timezone"
            [timeFormat]="timeFormat"
            [options]="options"
            (onDayClick)="onDayClickEvent($event)"
            (onEventClick)="onEventClickEvent($event)"
            (onEventMouseover)="onEventMouseoverEvent($event)"
            (onEventMouseout)="onEventMouseoutEvent($event)"
            (onEventDragStart)="onEventDragStartEvent($event)"
            (onEventDragStop)="onEventDragStopEvent($event)"
            (onEventDrop)="onEventDropEvent($event)"
            (onEventResizeStart)="onEventResizeStartEvent($event)"
            (onEventResizeStop)="onEventResizeStopEvent($event)"
            (onEventResize)="onEventResizeEvent($event)"
            (onViewRender)="onViewRenderEvent($event)"
            (onViewDestroy)="onViewDestroyEvent($event)"
            (onDrop)="onDropEvent($event)">
        </p-schedule>
    `
})
export class CindySchedule {
    @ViewChild("schedule") schedule: Schedule;

    @Input() events: any[];
    @Input() header: any;
    @Input() style: any;
    @Input() styleClass: string;
    @Input() rtl: boolean;
    @Input() weekends: boolean;
    @Input() hiddenDays: number[];
    @Input() fixedWeekCount: boolean;
    @Input() weekNumbers: boolean;
    @Input() businessHours: any;
    @Input() height: any;
    @Input() contentHeight: any;
    @Input() aspectRatio: number = 1.35;
    @Input() eventLimit: any;
    @Input() defaultDate: any;
    @Input() editable: boolean;
    @Input() droppable: boolean;
    @Input() eventStartEditable: boolean;
    @Input() eventDurationEditable: boolean;
    @Input() defaultView: string = 'month';
    @Input() allDaySlot: boolean = true;
    @Input() allDayText: string = 'all-day';
    @Input() slotDuration: any = '00:30:00';
    @Input() slotLabelInterval: any;
    @Input() snapDuration: any;
    @Input() scrollTime: any = '06:00:00';
    @Input() minTime: any = '00:00:00';
    @Input() maxTime: any = '24:00:00';
    @Input() slotEventOverlap: boolean = true;
    @Input() nowIndicator: boolean;
    @Input() dragRevertDuration: number = 500;
    @Input() dragOpacity: number = .75;
    @Input() dragScroll: boolean = true;
    @Input() eventOverlap: any;
    @Input() eventConstraint: any;
    @Input() locale: string;
    @Input() timezone: boolean | string = false;
    @Input() timeFormat: string | null = null;
    @Input() eventRender: Function;
    @Input() dayRender: Function;
    @Input() options: any;

    @Output() onDayClick: EventEmitter<any> = new EventEmitter();
    @Output() onDrop: EventEmitter<any> = new EventEmitter();
    @Output() onEventClick: EventEmitter<any> = new EventEmitter();
    @Output() onEventMouseover: EventEmitter<any> = new EventEmitter();
    @Output() onEventMouseout: EventEmitter<any> = new EventEmitter();
    @Output() onEventDragStart: EventEmitter<any> = new EventEmitter();
    @Output() onEventDragStop: EventEmitter<any> = new EventEmitter();
    @Output() onEventDrop: EventEmitter<any> = new EventEmitter();
    @Output() onEventResizeStart: EventEmitter<any> = new EventEmitter();
    @Output() onEventResizeStop: EventEmitter<any> = new EventEmitter();
    @Output() onEventResize: EventEmitter<any> = new EventEmitter();
    @Output() onViewRender: EventEmitter<any> = new EventEmitter();
    @Output() onViewDestroy: EventEmitter<any> = new EventEmitter();

    onDayClickEvent(event) {
        this.onEventClick.emit(event);
    }

    onEventClickEvent(event) {
        this.onDayClick.emit(event);
    }

    onEventMouseoverEvent(event) {
        this.onEventMouseover.emit(event);
    }

    onEventMouseoutEvent(event) {
        this.onEventMouseout.emit(event);
    }

    onEventDragStartEvent(event) {
        this.onEventDragStart.emit(event);
    }

    onEventDragStopEvent(event) {
        this.onEventDragStop.emit(event);
    }

    onEventDropEvent(event) {
        this.onEventDrop.emit(event);
    }

    onEventResizeStartEvent(event) {
        this.onEventResizeStart.emit(event);
    }

    onEventResizeStopEvent(event) {
        this.onEventResizeStop.emit(event);
    }

    onEventResizeEvent(event) {
        this.onEventResize.emit(event);
    }

    onViewRenderEvent(event) {
        this.onViewRender.emit(event);
    }

    onViewDestroyEvent(event) {
        this.onViewDestroy.emit(event);
    }

    onDropEvent(event) {
        this.onDrop.emit(event);
    }

    prev() {
        this.schedule.prev();
    }

    next() {
        this.schedule.next();
    }

    prevYear() {
        this.schedule.prevYear();
    }

    nextYear() {
        this.schedule.nextYear();
    }

    today() {
        this.schedule.today();
    }

    gotoDate(date: Date) {
        this.schedule.gotoDate(date);
    }

    incrementDate(duration: any) {
        this.schedule.incrementDate(duration);
    }

    getDate() {
        this.schedule.getDate();
    }

    changeView(viewName: string) {
        this.schedule.changeView(viewName);
    }

    updateEvent(event: any) {
        this.schedule.updateEvent(event);
    }
}