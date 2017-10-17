import { Component, ErrorHandler, OnInit } from '@angular/core';

import { MenuItem } from '../../../theme/components/common/menuitem';
import { CindyConfirmationService } from '../../../theme/services/cindyConfirmDialog/cindyConfirmation.service';

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
    optButtons: MenuItem[];
    conditions: QueryCondition[];
    user: SysUserModel;//当前操作的user对象
    condition: SysUserModel;//查询条件
    displayAddDialog: boolean;
    displayModifyDialog: boolean;
    displayCondition: boolean;
    constructor(
        private userService: SysUserService,
        private confirmDiagService: CindyConfirmationService,
    ) { }

    ngOnInit() {
        // this.getUsers();
        this.initOptButtons();
        this.initConditions();
        this.getMockUsers();
    }

    initConditions() {
        this.conditions = [];
        this.condition = new SysUserModel();
        this.condition.Status = true;
        this.condition.Name = "";
    }

    initOptButtons() {
        this.optButtons = [];
        this.optButtons.push(
            {
                label: '新增',
                icon: 'fa-plus',
                command: () => {
                    this.showAddDialog();
                }
            },
            {
                label: '修改',
                icon: 'fa-pencil',
                command: () => {
                    this.showModifyDialog();
                }
            },
            {
                label: '删除',
                icon: 'fa-trash',
                command: () => {
                    this.delete();
                }
            },
        );
    }

    getMockUsers() {
        this.userService.getMockUsers().subscribe(res => {
            console.log(res);
            if (res.retCode === 1) {
                this.users = res.resultData;
            }
        });
    }

    getListJson() {
        let sorts: QuerySort[] = [
            { table: 'Sys_User', field: 'Birth', isASC: false },
            { table: 'Sys_User', field: 'UserId', isASC: false },
        ];

        this.userService.getListJson(this.conditions, sorts).subscribe(res => { });
    }

    refresh() {
        this.getMockUsers();
    }

    showConditionDialog() {
        this.displayCondition = true;
    }

    showModifyDialog() {
        if (!this.user) {
            this.confirmDiagService.confirm({
                message: '请选择要编辑的数据',
                icon: 'fa fa-warning'
            });
        } else {
            this.displayModifyDialog = true;
        }
    }

    showAddDialog() {
        this.displayAddDialog = true;
    }

    delete() {
        if (this.user) {
            this.confirmDiagService.confirm({
                rejectVisible: true,
                message: '确定要删除吗？',
                accept: () => {
                    console.log('删除成功！');
                    this.refresh();
                },
                reject: () => {
                    console.log('删除失败');
                }
            });
        } else {
            this.confirmDiagService.confirm({
                message: '请选择要删除的数据',
                icon: 'fa fa-warning'
            });
        }
    }

    handleRowSelect(event) {
        this.user = event.data;
    }

    onCloseAddDialog() {
        this.displayAddDialog = false;
    }

    onCloseModifyDialog() {
        this.displayModifyDialog = false;
    }

    resetConditions() {
        this.initConditions();
    }

    setConditions() {
        this.displayCondition = false;

        if (this.condition != null) {
            this.conditions.push({ table: 'Sys_User', field: 'Status', fieldType: 'String', condition: '=', value: this.condition.Status.toString() });
        }

        if (this.condition.Name) {
            this.conditions.push({ table: 'Sys_User', field: 'Name', fieldType: 'String', condition: 'in', value: this.condition.Name });
        }
    }

}