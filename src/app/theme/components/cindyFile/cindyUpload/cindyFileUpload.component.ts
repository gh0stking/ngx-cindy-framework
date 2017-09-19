import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'c-fileUpload',
    template: `
        <p-fileUpload 
            [name]="name" 
            [url]="url" 
            [method]="method" 
            [multiple]="multiple" 
            [accept]="accept" 
            [disabled]="disabled" 
            [auto]="auto" 
            [maxFileSize]="maxFileSize" 
            [invalidFileSizeMessageSummary]="invalidFileSizeMessageSummary" 
            [invalidFileSizeMessageDetail]="invalidFileSizeMessageDetail" 
            [invalidFileTypeMessageSummary]="invalidFileTypeMessageSummary" 
            [invalidFileTypeMessageDetail]="invalidFileTypeMessageDetail" 
            [style]="style" 
            [styleClass]="styleClass" 
            [previewWidth]="previewWidth" 
            [chooseLabel]="chooseLabel" 
            [uploadLabel]="uploadLabel" 
            [cancelLabel]="cancelLabel" 
            [withCredentials]="withCredentials" 
            [mode]="mode" 
            [customUpload]="customUpload" 
            [showUploadButton]="showUploadButton" 
            [showCancelButton]="showCancelButton" 
            [files]="files"
            (onBeforeUpload)="onBeforeUploadEvent($event)"
            (onBeforeSend)="onBeforeSendEvent($event)"
            (onUpload)="onUploadEvent($event)"
            (onError)="onErrorEvent($event)"
            (onClear)="onClearEvent()"
            (onRemove)="onRemoveEvent($event)"
            (onSelect)="onSelectEvent($event)"
            (onProgress)="onProgressEvent($event)"
            (uploadHandler)="uploadHandlerEvent($event)">
            <ng-content></ng-content>
        </p-fileUpload>
    `
})
export class CindyFileUpload {
    @Input() name: string;
    @Input() url: string;
    @Input() method: string = "POST";
    @Input() multiple: boolean = false;
    @Input() accept: string = "false";
    @Input() disabled: boolean = false;
    @Input() auto: boolean = false;
    @Input() maxFileSize: number;
    @Input() invalidFileSizeMessageSummary: string = "{0}: Invalid file size, ";
    @Input() invalidFileSizeMessageDetail: string = "maximum upload size is {0}.";
    @Input() invalidFileTypeMessageSummary: string = "{0}: Invalid file type, ";
    @Input() invalidFileTypeMessageDetail: string = "allowed file types: {0}.";
    @Input() style: string;
    @Input() styleClass: string;
    @Input() previewWidth: number = 50;
    @Input() chooseLabel: string = "Choose";
    @Input() uploadLabel: string = "Upload";
    @Input() cancelLabel: string = "Cancel";
    @Input() withCredentials: boolean = false;
    @Input() mode: string = "advanced";
    @Input() customUpload: boolean = false;
    @Input() showUploadButton: boolean = true;
    @Input() showCancelButton: boolean = true;
    @Input() files: Array<any>;

    @Output() onBeforeUpload = new EventEmitter();
    @Output() onBeforeSend = new EventEmitter();
    @Output() onUpload = new EventEmitter();
    @Output() onError = new EventEmitter();
    @Output() onClear = new EventEmitter();
    @Output() onRemove = new EventEmitter();
    @Output() onSelect = new EventEmitter();
    @Output() onProgress = new EventEmitter();
    @Output() uploadHandler = new EventEmitter();

    onBeforeUploadEvent(event) {
        this.onBeforeUpload.emit(event);
    }

    onBeforeSendEvent(event) {
        this.onBeforeSend.emit(event);
    }

    onUploadEvent(event) {
        this.onUpload.emit(event);
    }

    onErrorEvent(event) {
        this.onError.emit(event);
    }

    onClearEvent() {
        this.onClear.emit();
    }

    onRemoveEvent(event) {
        this.onRemove.emit(event);
    }

    onSelectEvent(event) {
        this.onSelect.emit(event);
    }

    onProgressEvent(event) {
        this.onProgress.emit(event);
    }

    uploadHandlerEvent(event) {
        this.uploadHandler.emit(event);
    }
}