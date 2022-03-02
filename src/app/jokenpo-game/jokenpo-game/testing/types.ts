import { Hand } from '../../../core/interfaces';
import { GameMatch } from '../../../core/models';

export interface PlayMatch {
    gameMatchMock: GameMatch;
    firstPlayerHand: Hand;
    secondPlayerHand: Hand;
    firstPlayerScoreExpected: number;
    secondPlayerScoreExpected: number;
}
