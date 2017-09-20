import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DragDropComponent } from './dragdrop.component';
import { CindyModule } from '../../theme/cindy.module';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        CindyModule,
    ],
    declarations: [DragDropComponent],
})
export class DragDropModule { }
