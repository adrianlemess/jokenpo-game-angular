import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokenpoGameComponent } from './jokenpo-game/jokenpo-game.component';
import { JokenpoGameRoutingModule } from './jokenpo-game-routing.module';

@NgModule({
    declarations: [JokenpoGameComponent],
    imports: [CommonModule, JokenpoGameRoutingModule],
})
export class JokenpoGameModule {}
