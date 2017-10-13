import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {
    Http,
    CustomErrorHandler,
    TimeService,
} from './core';
const CORE_SERVICES = [Http, CustomErrorHandler, TimeService,];

import {
    SysUserService,
    SysRoleService,
    SysUserRoleService,
} from './sys';
const SYS_SERVICES = [SysUserService, SysRoleService, SysUserRoleService,];

@NgModule({
    imports: [HttpClientModule],
    providers: [
        ...CORE_SERVICES,
        ...SYS_SERVICES,
    ]
})
export class ServicesModule { }