import { END_GAME_RESULT, HAND_TYPE } from '../enums';
import { JokenpoStrategy, Hand } from '../interfaces';

const IMAGE_URL = '';

export class ScissorHand implements Hand {
    name: HAND_TYPE;
    avatarImgUrl: string;
    strategy: JokenpoStrategy;

    constructor(strategy: JokenpoStrategy) {
        this.name = HAND_TYPE.SCISSOR;
        this.avatarImgUrl = IMAGE_URL;
        this.strategy = strategy;
    }

    playAgainst(hand: Hand): END_GAME_RESULT {
        return this.strategy.playAgainst(hand);
    }
}
