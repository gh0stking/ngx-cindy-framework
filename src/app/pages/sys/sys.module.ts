import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SysComponent } from './sys.component';
import { SysRoleComponent } from './sys-role';
import { SysUserComponent } from './sys-user';
import { SysUserRoleComponent } from './sys-user-role';

const routes: Routes = [
    {
        path: 'sys',
        component: SysComponent,
        children: [
            { path: 'user', component: SysUserComponent },
            { path: 'role', component: SysRoleComponent },
            { path: 'user-role', component: SysUserRoleComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [
        SysComponent,
        SysRoleComponent,
        SysUserComponent,
        SysUserRoleComponent,
    ]
})
export class SysModule { }