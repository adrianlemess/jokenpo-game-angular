import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeFormComponent } from './welcome-form/welcome-form.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: WelcomeFormComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WelcomeRoutingModule {}
