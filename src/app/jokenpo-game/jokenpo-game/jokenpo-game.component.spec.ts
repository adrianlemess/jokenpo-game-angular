import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingModule } from '../../testing/testing.module';

import { JokenpoGameComponent } from './jokenpo-game.component';

describe('JokenpoGameComponent', () => {
    let component: JokenpoGameComponent;
    let fixture: ComponentFixture<JokenpoGameComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [JokenpoGameComponent],
            imports: [TestingModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(JokenpoGameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
