import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'welcome',
    },
    {
        path: 'welcome',
        loadChildren: () => import('./welcome/welcome.module').then((m) => m.WelcomeModule),
    },
    {
        path: 'game-session',
        loadChildren: () =>
            import('./jokenpo-game/jokenpo-game.module').then((m) => m.JokenpoGameModule),
    },
    {
        path: '**',
        redirectTo: 'welcome',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
