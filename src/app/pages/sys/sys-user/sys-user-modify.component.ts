import { Component, Input, Output, EventEmitter } from '@angular/core';

import { SysUserModel } from '../../../domain/sys/sys-user.model';

@Component({
    selector: 'sys-user-modify',
    templateUrl: './sys-user-modify.component.html'
})
export class SysUserModifyComponent {
    cities: any[];
    @Input() user: SysUserModel;
    @Output() onSave: EventEmitter<any> = new EventEmitter();
    @Output() onClose: EventEmitter<any> = new EventEmitter();

    ngOnInit() {
        this.getCities();
        this.initUser();
    }

    initUser() {
        this.user = new SysUserModel();
        this.user.Status = true;
        this.user.Sex = true;
    }

    getCities() {
        this.cities = [];
        this.cities.push({ label: '上海', value: { id: "1001", name: '上海', code: 'sh' } });
        this.cities.push({ label: '北京', value: { id: "1002", name: '北京', code: 'bj' } });
        this.cities.push({ label: '深圳', value: { id: "1003", name: '深圳', code: 'sz' } });
    }

    save() {
        this.onSave.emit();
    }

    close() {
        this.onClose.emit();
    }
}