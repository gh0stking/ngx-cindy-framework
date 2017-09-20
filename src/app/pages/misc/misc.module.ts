import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MiscComponent } from './misc.component';
import { CindyModule } from '../../theme/cindy.module';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        CindyModule,
    ],
    declarations: [MiscComponent],
})
export class MiscModule { }
