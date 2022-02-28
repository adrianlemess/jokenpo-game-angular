import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandsCarouselComponent } from './hands-carousel.component';

describe('HandsCarouselComponent', () => {
    let component: HandsCarouselComponent;
    let fixture: ComponentFixture<HandsCarouselComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HandsCarouselComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HandsCarouselComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
