import { END_GAME_RESULT, HAND_TYPE } from '../enums';
import { JokenpoStrategy, Hand } from '../interfaces';

export abstract class AbstractHand implements Hand {
    name: HAND_TYPE;
    avatarImgUrl: string;
    strategy: JokenpoStrategy;

    constructor(strategy: JokenpoStrategy, name: HAND_TYPE, imageUrl: string) {
        this.name = name;
        this.avatarImgUrl = imageUrl;
        this.strategy = strategy;
    }

    playAgainst(hand: Hand): END_GAME_RESULT {
        return this.strategy.playAgainst(hand);
    }
}
