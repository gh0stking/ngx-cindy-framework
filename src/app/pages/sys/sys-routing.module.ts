import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SysComponent } from './sys.component';
import { SysUserComponent } from './sys-user/sys-user.component';
import { SysRoleComponent } from './sys-role/sys-role.component';
import { SysUserRoleComponent } from './sys-user-role/sys-user-role.component';

const routes: Routes = [
    {
        path: '',
        component: SysComponent,
        children: [
            { path: 'user', component: SysUserComponent },
            { path: 'role', component: SysRoleComponent },
            { path: 'user-role', component: SysUserRoleComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SysRoutingModule { }

//此处只存放需要添加到路由中的组件，其他组件请添加到sys.module.ts中的components组件中
export const routedComponents = [
    SysComponent,
    SysUserComponent,
    SysRoleComponent,
    SysUserRoleComponent,
];