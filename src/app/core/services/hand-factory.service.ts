import { Injectable } from '@angular/core';
import { HAND_TYPE } from '../enums';
import { PaperHand, RockHand, ScissorHand } from '../models';
import { JokenpoStrategyFactoryService } from './jokenpo-strategy-factory.service';

@Injectable({
    providedIn: 'root',
})
export class HandFactoryService {
    constructor(private jokenpoStrategyFactoryService: JokenpoStrategyFactoryService) {}

    create(type: HAND_TYPE) {
        const strategy = this.jokenpoStrategyFactoryService.createStrategy(type);
        switch (type) {
            case HAND_TYPE.PAPER:
                return new PaperHand(strategy);
            case HAND_TYPE.ROCK:
                return new RockHand(strategy);
            case HAND_TYPE.SCISSOR:
                return new ScissorHand(strategy);
            default:
                throw new Error('Hand not found');
        }
    }

    // createForComputer() {
    //     switch () {

    //     }
    // }
}
