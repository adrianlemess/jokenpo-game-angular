import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { WelcomeFormComponent } from './welcome-form.component';
import { TestingModule } from '../../testing/testing.module';

describe('WelcomeFormComponent', () => {
    let component: WelcomeFormComponent;
    let fixture: ComponentFixture<WelcomeFormComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [WelcomeFormComponent],
                imports: [
                    TestingModule,
                    ReactiveFormsModule,
                    MatButtonModule,
                    MatCardModule,
                    MatInputModule,
                    MatRadioModule,
                    MatSelectModule,
                ],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(WelcomeFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should compile', () => {
        expect(component).toBeTruthy();
    });
});
