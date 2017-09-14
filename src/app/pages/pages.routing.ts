import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { Pages } from './pages.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'pages',
        component: Pages,
        // canActivate: [AuthGuard],
        children: [
            {
                path: '',
                children: [
                    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                    { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule' },
                    // { path: 'input', loadChildren: 'app/pages/input/input.module#InputModule' },
                    // { path: 'button', loadChildren: 'app/pages/button/button.module#ButtonModule' },
                    // { path: 'data', loadChildren: 'app/pages/data/data.module#DataModule' },
                    // { path: 'panel', loadChildren: 'app/pages/panel/panel.module#PanelModule' },
                    // { path: 'overlay', loadChildren: 'app/pages/overlay/overlay.module#OverlayModule' },
                    // { path: 'file', loadChildren: 'app/pages/file/file.module#FileModule' },
                    // { path: 'menu', loadChildren: 'app/pages/menu/menu.module#MenuModule' },
                    // { path: 'charts', loadChildren: 'app/pages/charts/charts.module#ChartsModule' },
                    // { path: 'messages', loadChildren: 'app/pages/messages/messages.module#MessagesModule' },
                    // { path: 'multimedia', loadChildren: 'app/pages/multimedia/multimedia.module#MultimediaModule' },
                    // { path: 'dragdrop', loadChildren: 'app/pages/dragdrop/dragdrop.module#DragdropModule' },
                    // { path: 'misc', loadChildren: 'app/pages/misc/misc.module#MiscModule' },
                ]
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
