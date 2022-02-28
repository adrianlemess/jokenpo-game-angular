import { Player } from './player.model';

export class GameMatch {
    constructor(
        public firstPlayer: Player,
        public secondPlayer: Player,
        private matchScoreEnd: number
    ) {}

    checkWinner(): Player | null {
        if (this.firstPlayer.score === this.matchScoreEnd) {
            return this.firstPlayer;
        } else if (this.firstPlayer.score === this.matchScoreEnd) {
            return this.secondPlayer;
        }

        return null;
    }
}
