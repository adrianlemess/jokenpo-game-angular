import { HAND_TYPE } from '../enums';
import { JokenpoStrategy } from '../interfaces';
import { AbstractHand } from './hand.model';

const IMAGE_URL = '../../../assets/hand-paper.png';

export class PaperHand extends AbstractHand {
    constructor(strategy: JokenpoStrategy) {
        super(strategy, HAND_TYPE.PAPER, IMAGE_URL);
    }
}
