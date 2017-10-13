import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccordionModule, SharedModule, TooltipModule } from 'primeng/primeng';

import { PagesRoutingModule } from './pages-routing.module';
import { CindyModule } from '../theme/cindy.module';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './not-found.component';

import { DashboardModule } from './dashboard/dashboard.module';

const PAGES_COMPOENNTS = [
    PagesComponent,
    NotFoundComponent,
];

@NgModule({
    imports: [
        PagesRoutingModule,
        CommonModule,
        FormsModule,
        CindyModule,
        AccordionModule,
        SharedModule,
        TooltipModule,

        DashboardModule,
    ],
    declarations: [
        ...PAGES_COMPOENNTS,
    ]
})
export class PagesModule { }