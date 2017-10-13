import { NgModule } from '@angular/core';
import { CindyModule } from '../../theme/cindy.module';

import { SysRoutingModule, routedComponents } from './sys-routing.module';

//此处只存放不需要添加到路由中的组件
const components = [

];

@NgModule({
    imports: [SysRoutingModule, CindyModule],
    declarations: [...routedComponents, ...components],
})
export class SysModule { }