import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameMatch, Player } from '../../../core/models';
import { PLAYER_TYPE } from '../../../core/enums';
import { SharedModule } from '../../../shared/shared.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

export const HUMAN_COMPUTER_MOCK: GameMatch = {
    firstPlayer: new Player({
        username: 'Luke Skywalker',
        score: 0,
        playerType: PLAYER_TYPE.HUMAN,
    }),
    secondPlayer: new Player({
        username: 'C3PO',
        score: 0,
        playerType: PLAYER_TYPE.COMPUTER,
    }),
    matchScoreEnd: 5,
    delayPerRoundInMs: 0,
};

export const COMPUTER_COMPUTER_MOCK: GameMatch = {
    firstPlayer: new Player({
        username: 'R2D2',
        score: 0,
        playerType: PLAYER_TYPE.COMPUTER,
    }),
    secondPlayer: new Player({
        username: 'C3PO',
        score: 0,
        playerType: PLAYER_TYPE.COMPUTER,
    }),
    matchScoreEnd: 3,
    delayPerRoundInMs: 0,
};

export const LIST_IMPORTS = [
    SharedModule,
    MatButtonToggleModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    NgbModule,
];
