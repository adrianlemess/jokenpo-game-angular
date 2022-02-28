import { Component, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Hand } from '../../core/interfaces';

@Component({
    selector: 'app-hands-carousel',
    templateUrl: './hands-carousel.component.html',
    styleUrls: ['./hands-carousel.component.scss'],
})
export class HandsCarouselComponent {
    @Input()
    carouselTitle = '';

    @Input()
    carouselSubtitle = '';

    @Input()
    hands: Hand[];

    constructor(config: NgbCarouselConfig) {
        config.interval = 500;
        config.keyboard = false;
        config.pauseOnHover = false;
        config.showNavigationArrows = false;
        config.showNavigationIndicators = false;
    }
}
