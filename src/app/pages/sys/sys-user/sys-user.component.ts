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
    user: SysUserModel;
    users: SysUserModel[];
    optButtons: MenuItem[];
    sorts: QuerySort[];
    conditions: QueryCondition[];
    conditionModel: SysUserModel;
    displayCondition: boolean;
    displayAddDialog: boolean;
    displayModifyDialog: boolean;
    constructor(
        private userService: SysUserService,
        private confirmDiagService: CindyConfirmationService,
    ) { }

    ngOnInit() {
        this.initOptButtons();
        this.initConditions();
        this.getMockUsers();
        // this.getListJson();
    }

    initConditions() {
        this.conditions = [];
        this.conditionModel = new SysUserModel();
        this.conditionModel.Status = true;
        this.conditionModel.Name = "";
    }

    initOptButtons() {
        this.optButtons = [];
        this.optButtons.push(
            {
                label: '新增',
                icon: 'fa-plus',
                command: () => { this.showAddDialog(); }
            },
            {
                label: '修改',
                icon: 'fa-pencil',
                command: () => { this.showModifyDialog(); }
            },
            {
                label: '删除',
                icon: 'fa-trash',
                command: () => { this.delete(); }
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
        // let sorts: QuerySort[] = [
        //     { table: 'Sys_User', field: 'Birth', isASC: false },
        //     { table: 'Sys_User', field: 'UserId', isASC: false },
        // ];
        this.setConditions();
        this.userService.getListJson(this.conditions, this.sorts).subscribe(res => { });
    }

    refresh() {
        this.getMockUsers();
    }

    showConditionDialog() {
        this.displayCondition = true;
    }

    showModifyDialog() {
        if (!this.user) {
            this.confirmDiagService.confirm({ message: '请选择要编辑的数据', icon: 'fa fa-warning' });
        } else {
            this.displayModifyDialog = true;
        }
    }

    showAddDialog() {
        this.user = new SysUserModel();
        this.displayAddDialog = true;
    }

    delete() {
        if (!this.user) {
            this.confirmDiagService.confirm({ message: '请选择要删除的数据', icon: 'fa fa-warning' });
        } else {
            this.confirmDiagService.confirm({
                rejectVisible: true,
                message: '确定要删除吗？',
                accept: () => { this.refresh(); }
            });
        }
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
        if (this.conditionModel.Name) {
            this.conditions.push({ table: 'Sys_User', field: 'Name', fieldType: 'String', condition: 'in', value: this.conditionModel.Name });
        }
    }

}