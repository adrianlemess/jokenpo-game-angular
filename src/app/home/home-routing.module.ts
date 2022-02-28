import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home2Component } from './home-2/home.component';
import { WelcomeFormComponent } from './welcome-form/welcome-form.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: WelcomeFormComponent,
    },
    {
        path: 'home-2',
        component: Home2Component,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {}
