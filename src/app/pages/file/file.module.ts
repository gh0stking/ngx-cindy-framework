import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FileComponent } from './file.component';
import { CindyModule } from '../../theme/cindy.module';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        CindyModule,
    ],
    declarations: [FileComponent],
})
export class FileModule { }
