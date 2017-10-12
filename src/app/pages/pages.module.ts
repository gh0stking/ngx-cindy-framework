import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing } from './pages.routing';
import { PagesComponent } from './pages.component';
import { CindyModule } from '../theme/cindy.module';

import { AccordionModule, SharedModule, TooltipModule } from 'primeng/primeng';

@NgModule({
    imports: [
        routing,
        CommonModule,
        FormsModule,
        CindyModule,
        AccordionModule,
        SharedModule,
        TooltipModule,
    ],
    declarations: [PagesComponent]
})
export class PagesModule { }