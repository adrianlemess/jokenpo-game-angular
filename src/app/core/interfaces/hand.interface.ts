import { END_GAME_RESULT, HAND_TYPE } from '../enums';
import { JokenpoStrategy } from './jokenpo-strategy.interface';

export interface Hand {
    name: HAND_TYPE;
    avatarImgUrl: string;
    strategy: JokenpoStrategy;
    playAgainst(hand: Hand): END_GAME_RESULT;
}
