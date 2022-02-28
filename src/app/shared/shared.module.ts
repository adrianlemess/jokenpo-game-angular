import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HandsCarouselComponent } from './hands-carousel/hands-carousel.component';

@NgModule({
    declarations: [ScoreboardComponent, HandsCarouselComponent],
    imports: [CommonModule, MatCardModule, NgbModule],
    exports: [ScoreboardComponent, HandsCarouselComponent],
})
export class SharedModule {}
