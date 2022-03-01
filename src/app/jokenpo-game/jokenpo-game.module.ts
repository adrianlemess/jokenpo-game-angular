import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokenpoGameComponent } from './jokenpo-game/jokenpo-game.component';
import { JokenpoGameRoutingModule } from './jokenpo-game-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { JokenpoPanelComponent } from './jokenpo-panel/jokenpo-panel.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [JokenpoGameComponent, JokenpoPanelComponent],
    imports: [
        CommonModule,
        JokenpoGameRoutingModule,
        MatButtonToggleModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        SharedModule,
        FormsModule,
    ],
})
export class JokenpoGameModule {}
