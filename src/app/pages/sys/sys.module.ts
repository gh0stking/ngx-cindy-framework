import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CindyModule } from '../../theme/cindy.module';

import { SysRoutingModule, routedComponents } from './sys-routing.module';
import { SysUserAddComponent } from './sys-user/sys-user-add.component';
import { SysUserModifyComponent } from './sys-user/sys-user-modify.component';
import { SysUserConditionComponent } from './sys-user/sys-user-condition.component';

//此处只存放不需要添加到路由中的组件
const components = [
    SysUserAddComponent,
    SysUserModifyComponent,
    SysUserConditionComponent,
];

@NgModule({
    imports: [FormsModule, CommonModule, SysRoutingModule, CindyModule],
    declarations: [...routedComponents, ...components],
})
export class SysModule { }