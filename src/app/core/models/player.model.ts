import { PLAYER_TYPE } from '../enums';

export interface PlayerInput {
    username: string;
    playerType: PLAYER_TYPE;
    score: number;
}
export class Player implements PlayerInput {
    username: string;
    playerType: PLAYER_TYPE;
    score: number;

    constructor(player: PlayerInput) {
        this.username = player.username;
        this.playerType = player.playerType;
        this.score = player.score;
    }

    increaseScore() {
        this.score++;
    }
}
