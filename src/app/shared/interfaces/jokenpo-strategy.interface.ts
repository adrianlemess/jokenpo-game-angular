import { END_GAME_RESULT } from '../enums';
import { Hand } from './hand.interface';

export interface JokenpoStrategy {
    playAgainst(hand: Hand): END_GAME_RESULT;
}
