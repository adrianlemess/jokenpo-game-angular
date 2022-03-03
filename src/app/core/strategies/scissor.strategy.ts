import { END_GAME_RESULT, HAND_TYPE } from '../enums';
import { JokenpoStrategy, Hand } from '../interfaces';
import { StrategyError } from '../errors';

export class ScissorStrategy implements JokenpoStrategy {
    private readonly playAgainstMap = {
        [HAND_TYPE.PAPER]: END_GAME_RESULT.WIN,
        [HAND_TYPE.SCISSOR]: END_GAME_RESULT.TIE,
        [HAND_TYPE.ROCK]: END_GAME_RESULT.DEFEAT,
    };

    playAgainst(hand: Hand): END_GAME_RESULT {
        if (this.playAgainstMap[hand.name]) {
            return this.playAgainstMap[hand.name];
        }

        throw new StrategyError('ScissorStrategy');
    }
}
