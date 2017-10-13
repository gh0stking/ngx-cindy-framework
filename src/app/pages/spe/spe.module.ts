import { NgModule } from '@angular/core';

import { SpeRoutingModule, routedComponents } from './spe-routing.module';

const components = [

];

@NgModule({
    imports: [SpeRoutingModule],
    declarations: [...routedComponents, ...components]
})
export class SpeModule { }