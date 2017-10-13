import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { CindyModule } from '../../theme/cindy.module';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        CindyModule,
    ],
    declarations: [
        DashboardComponent,
    ],
})
export class DashboardModule { }
