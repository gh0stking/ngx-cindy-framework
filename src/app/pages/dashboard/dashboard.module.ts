import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { routing } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { CindyModule } from '../../theme/cindy.module';

@NgModule({
    imports: [routing, FormsModule, CindyModule],
    declarations: [DashboardComponent],
})
export class DashboardModule { }
