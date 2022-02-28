import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [ScoreboardComponent],
    imports: [CommonModule, MatCardModule, NgbModule],
    exports: [ScoreboardComponent],
})
export class SharedModule {}
