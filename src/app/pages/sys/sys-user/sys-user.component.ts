import { Component, ErrorHandler, OnInit } from '@angular/core';

import { QueryCondition, QuerySort } from '../../../services/core/http.service';
import { SysUserService } from '../../../services/sys/sys-user.service';
import { SysUserModel } from '../../../domain/sys/sys-user.model';

/**
 * @author fuyh
 * @desc 用户管理
 */
@Component({
    selector: 'sys-user',
    templateUrl: './sys-user.component.html',
    styleUrls: ['./sys-user.component.scss']
})
export class SysUserComponent implements OnInit {
    users: SysUserModel[];
    constructor(private userService: SysUserService) { }

    ngOnInit() {
        // this.getUsers();
        this.getMockUsers();
    }

    getMockUsers() {
        this.userService.getMockUsers().subscribe(res => {
            console.log(res);
            if (res.retCode === 1) {
                this.users = res.resultData;
            }
        });
    }

    getUsers() {
        let conditions: QueryCondition[] = [
            { table: 'Sys_User', field: 'Status', fieldType: 'String', condition: '=', value: '1' },
            { table: 'Sys_User', field: 'Name', fieldType: 'String', condition: 'in', value: 'zhang' },
        ];

        let sorts: QuerySort[] = [
            { table: 'Sys_User', field: 'Birth', isASC: false },
            { table: 'Sys_User', field: 'UserId', isASC: false },
        ];

        this.userService.getListJson(conditions, sorts).subscribe(res => {
            console.log(res);
        });
    }
}