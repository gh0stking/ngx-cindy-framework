import { ErrorHandler } from '@angular/core';

export class CustomErrorHandler implements ErrorHandler {
    constructor(
    ) { }

    handleError(error: any): void {
        console.log('custom error:', error);
    }

}