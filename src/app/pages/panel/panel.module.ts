import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PanelComponent } from './panel.component';
import { CindyModule } from '../../theme/cindy.module';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        CindyModule,
    ],
    declarations: [PanelComponent],
})
export class PanelModule { }
