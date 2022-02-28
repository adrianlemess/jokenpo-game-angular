import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { PLAYER_TYPE } from '../../core/enums';
import { Player } from '../../core/models';

import { ScoreboardComponent } from './scoreboard.component';

describe('ScoreboardComponent', () => {
    let component: ScoreboardComponent;
    let fixture: ComponentFixture<ScoreboardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ScoreboardComponent],
            imports: [MatCardModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ScoreboardComponent);
        component = fixture.componentInstance;
        const firstPlayer = new Player({
            username: 'Luke Skywalker',
            score: 0,
            playerType: PLAYER_TYPE.HUMAN,
        });

        const secondPlayer = new Player({
            username: 'R2D2',
            score: 0,
            playerType: PLAYER_TYPE.COMPUTER,
        });
        component.scoreboardTitle = 'Test';
        component.firstPlayer = firstPlayer;
        component.secondPlayer = secondPlayer;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should show both with the same color when is tie the score', () => {
        component.firstPlayer.score = 0;
        component.secondPlayer.score = 0;
        fixture.detectChanges();

        expect(fixture).toMatchSnapshot('Tie score');
    });

    it('Should show the first with a different color when the first player is winning', () => {
        component.firstPlayer.score = 1;
        component.secondPlayer.score = 0;
        fixture.detectChanges();

        expect(fixture).toMatchSnapshot('Tie score');
    });

    it('Should show the second with a different color when the second player is winning', () => {
        component.firstPlayer.score = 0;
        component.secondPlayer.score = 2;
        fixture.detectChanges();

        expect(fixture).toMatchSnapshot('Tie score');
    });
});
