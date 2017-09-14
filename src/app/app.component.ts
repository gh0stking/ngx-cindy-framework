import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    template: `
        <main>
            <router-outlet></router-outlet>
        </main>
    `,
})
export class AppComponent {

}