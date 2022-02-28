import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [ScoreboardComponent],
    imports: [CommonModule, MatCardModule],
    exports: [ScoreboardComponent],
})
export class SharedModule {}
