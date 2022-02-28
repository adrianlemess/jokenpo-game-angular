import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokenpoGameComponent } from './jokenpo-game/jokenpo-game.component';
import { JokenpoGameRoutingModule } from './jokenpo-game-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [JokenpoGameComponent],
    imports: [CommonModule, JokenpoGameRoutingModule, SharedModule],
})
export class JokenpoGameModule {}
