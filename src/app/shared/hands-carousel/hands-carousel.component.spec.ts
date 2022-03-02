import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HandFactoryService } from '../../core/services/hand-factory.service';

import { HandsCarouselComponent } from './hands-carousel.component';

describe('HandsCarouselComponent', () => {
    let component: HandsCarouselComponent;
    let fixture: ComponentFixture<HandsCarouselComponent>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HandsCarouselComponent],
            imports: [NgbModule],
        }).compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(HandsCarouselComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should render with no hands and only carouselTitle and subtitle', () => {
        component.carouselTitle = 'Carousel title';
        component.carouselSubtitle = 'Carousel subtitle';
        component.hands = [];

        expect(fixture.nativeElement).toMatchSnapshot('Hands empty');
    });

    it('Should render with a list of hands', () => {
        const handsFactoryService = TestBed.inject(HandFactoryService);

        component.hands = handsFactoryService.getAllHands();
        component.carouselTitle = 'Carousel title';
        component.carouselSubtitle = 'Carousel subtitle';

        expect(fixture.nativeElement).toMatchSnapshot('Hands list');
    });
});
