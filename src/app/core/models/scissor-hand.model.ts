import { HAND_TYPE } from '../enums';
import { JokenpoStrategy } from '../interfaces';
import { AbstractHand } from './hand.model';

const IMAGE_URL = '../../../assets/hand-scissor.png';

export class ScissorHand extends AbstractHand {
    constructor(strategy: JokenpoStrategy) {
        super(strategy, HAND_TYPE.SCISSOR, IMAGE_URL);
    }
}
