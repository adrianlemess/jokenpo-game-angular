import { PLAYER_TYPE } from '../enums';

export class Player {
    constructor(public name: string, public playerType: PLAYER_TYPE, public score: number = 0) {}
}
