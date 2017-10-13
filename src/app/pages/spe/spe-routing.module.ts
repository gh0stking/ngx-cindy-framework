import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeComponent } from './spe.component';
import { SpeReceiveComponent } from './spe-receive/spe-receive.component';
import { SpeRegisterComponent } from './spe-register/spe-register.component';

const routes: Routes = [
    {
        path: '',
        component: SpeComponent,
        children: [
            { path: 'receive', component: SpeReceiveComponent },
            { path: 'register', component: SpeRegisterComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SpeRoutingModule { }

export const routedComponents = [
    SpeComponent,
    SpeReceiveComponent,
    SpeRegisterComponent,
];