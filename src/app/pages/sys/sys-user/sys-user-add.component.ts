import { Component, ErrorHandler, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { SysUserModel } from '../../../domain/sys/sys-user.model';
import { SysUserService } from '../../../services/sys/sys-user.service';

@Component({
    selector: 'sys-user-add',
    templateUrl: './sys-user-add.component.html'
})
export class SysUserAddComponent implements OnInit {
    cities: any[];
    @Input() user: SysUserModel;
    @Output() onSave: EventEmitter<any> = new EventEmitter();
    @Output() onClose: EventEmitter<any> = new EventEmitter();

    constructor(
        private sysUserService: SysUserService,
    ) { }

    ngOnInit() {
        this.getCities();
    }

    getCities() {
        this.cities = [];
        this.cities.push({ label: '上海', value: { id: "1001", name: '上海', code: 'sh' } });
        this.cities.push({ label: '北京', value: { id: "1002", name: '北京', code: 'bj' } });
        this.cities.push({ label: '深圳', value: { id: "1003", name: '深圳', code: 'sz' } });
    }

    save() {
        this.sysUserService.saveForm('', this.user).subscribe(res => {
            this.onSave.emit(res.retCode);
        });
    }

    close() {
        this.onClose.emit();
    }
}