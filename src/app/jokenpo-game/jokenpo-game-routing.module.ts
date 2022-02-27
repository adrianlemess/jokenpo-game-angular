import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokenpoGameComponent } from './jokenpo-game/jokenpo-game.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: JokenpoGameComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class JokenpoGameRoutingModule {}
