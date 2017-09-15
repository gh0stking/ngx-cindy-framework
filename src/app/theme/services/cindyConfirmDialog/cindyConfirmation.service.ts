import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ConfirmationService, Confirmation } from 'primeng/primeng';

@Injectable()
export class CindyConfirmationService {
    constructor(private confirmService: ConfirmationService) { }

    confirm(confirmation: Confirmation): ConfirmationService {
        return this.confirmService.confirm(confirmation);
    }
}