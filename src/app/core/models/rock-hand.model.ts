import { HAND_TYPE } from '../enums';
import { JokenpoStrategy } from '../interfaces';
import { AbstractHand } from './hand.model';

const IMAGE_URL = '../../../assets/hand-rock.png';

export class RockHand extends AbstractHand {
    constructor(strategy: JokenpoStrategy) {
        super(strategy, HAND_TYPE.ROCK, IMAGE_URL);
    }
}
