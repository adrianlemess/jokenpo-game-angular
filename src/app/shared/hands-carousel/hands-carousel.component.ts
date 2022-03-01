import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

import { Hand } from '../../core/interfaces';

@Component({
    selector: 'app-hands-carousel',
    templateUrl: './hands-carousel.component.html',
    styleUrls: ['./hands-carousel.component.scss'],
})
export class HandsCarouselComponent implements OnChanges {
    @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

    @Input()
    carouselTitle = '';

    @Input()
    carouselSubtitle = '';

    @Input()
    hands: Hand[];

    @Input()
    selectedHand: Hand | null;

    constructor(config: NgbCarouselConfig) {
        config.interval = 500;
        config.keyboard = false;
        config.pauseOnHover = false;
        config.pauseOnFocus = false;
        config.showNavigationArrows = false;
        config.showNavigationIndicators = false;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (!changes['selectedHand'].currentValue) {
            this.carousel.cycle();
        } else {
            const hand = changes['selectedHand'].currentValue;
            this.carousel.pause();
            this.carousel.select(hand.name);
        }
    }
}
