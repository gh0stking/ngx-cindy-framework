import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { DashboardComponent } from './dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [

        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);