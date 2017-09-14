import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';
import { Pages } from './pages.component';
import { CindyModule } from '../theme/cindy.module';

import { AccordionModule, SharedModule, TooltipModule } from 'primeng/primeng';

@NgModule({
    imports: [CommonModule, CindyModule, routing, AccordionModule, SharedModule, TooltipModule],
    declarations: [Pages]
})
export class PagesModule {

}