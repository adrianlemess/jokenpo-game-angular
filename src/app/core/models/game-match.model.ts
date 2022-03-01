import { Player } from './player.model';

export class GameMatch {
    constructor(
        public firstPlayer: Player,
        public secondPlayer: Player,
        public matchScoreEnd: number,
        public delayPerRoundInMs: number = 1000
    ) {}
}
