import { Component, ErrorHandler, OnInit } from '@angular/core';
import { MenuItem } from '../../../theme/components/common/menuitem';
import { CindyConfirmationService } from '../../../theme/services/cindyConfirmDialog/cindyConfirmation.service';

import { QueryCondition, QuerySort, PageSet } from '../../../services/core/http.service';
import { SysRoleService } from '../../../services/sys/sys-role.service';
import { SysRoleModel } from '../../../domain/sys/sys-role.model';

/**
 * @author fuyh
 * @desc 角色管理
 */
@Component({
    selector: 'sys-role',
    templateUrl: './sys-role.component.html',
    styleUrls: ['./sys-role.component.scss']
})
export class SysRoleComponent implements OnInit {
    conditions: QueryCondition[];
    conditionModel: SysRoleModel;
    sorts: QuerySort[];
    pageSet: PageSet = new PageSet();
    sysRoleList: SysRoleModel[];
    optButtons: MenuItem[];
    sysRole: SysRoleModel;
    constructor(private sysRoleSerice: SysRoleService, confirmService: CindyConfirmationService) { }

    ngOnInit() {
        this.initOptButtons();
        this.initConditions();
    }

    initConditions() {
        this.conditions = [];
        this.conditionModel = new SysRoleModel();
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

    getPageJson() {
        this.setConditions();
        this.sysRoleSerice.getPageJson(this.pageSet, this.conditions, this.sorts).subscribe(res => {
            this.sysRoleList = res.resultData;
        });
    }

    setConditions() {
        this.conditions = [];
        this.conditions.push({ table: 'Sys_Role', field: 'Name', fieldType: 'String', condition: '=', value: this.conditionModel.Name.toString() });
    }

    showAddDialog() {

    }

    showModifyDialog() {

    }

    delete() {

    }
}