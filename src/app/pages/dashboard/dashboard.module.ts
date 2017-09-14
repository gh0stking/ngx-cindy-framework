import { NgModule } from '@angular/core';

import { routing } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { CindyModule } from '../../theme/cindy.module';

@NgModule({
    imports: [routing, CindyModule],
    declarations: [DashboardComponent],
})
export class DashboardModule { }
