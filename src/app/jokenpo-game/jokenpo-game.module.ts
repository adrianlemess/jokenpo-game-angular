import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokenpoGameComponent } from './jokenpo-game/jokenpo-game.component';
import { JokenpoGameRoutingModule } from './jokenpo-game-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [JokenpoGameComponent],
    imports: [
        CommonModule,
        JokenpoGameRoutingModule,
        MatButtonToggleModule,
        MatButtonModule,
        MatIconModule,
        SharedModule,
        FormsModule,
    ],
})
export class JokenpoGameModule {}
