import { END_GAME_RESULT, HAND_TYPE } from '../enums';
import { JokenpoStrategy, Hand } from '../interfaces';
import { StrategyError } from '../errors';

export class ScissorStrategy implements JokenpoStrategy {
    playAgainst(hand: Hand): END_GAME_RESULT {
        switch (hand.name) {
            case HAND_TYPE.SCISSOR:
                return END_GAME_RESULT.TIE;
            case HAND_TYPE.ROCK:
                return END_GAME_RESULT.DEFEAT;
            case HAND_TYPE.PAPER:
                return END_GAME_RESULT.WIN;
            default:
                throw new StrategyError('ScissorStrategy');
        }
    }
}
