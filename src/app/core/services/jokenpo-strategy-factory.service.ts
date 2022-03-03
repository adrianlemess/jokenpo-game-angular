import { Injectable } from '@angular/core';
import { HAND_TYPE } from '../enums';
import { PaperStrategy, RockStrategy, ScissorStrategy } from '../strategies';

@Injectable({
    providedIn: 'root',
})
/**
 * This factory return our strategy based on the handType variable passed as parameter.
 *
 * NOTE: A factory can create a new instance of a class for each request, but since our jokenpo strategies are stateless,
 * I've decided to return the same single instance of each strategy whatever a user request it.
 */
export class JokenpoStrategyFactoryService {
    private readonly paperStrategy: PaperStrategy = new PaperStrategy();
    private readonly rockStrategy: RockStrategy = new RockStrategy();
    private readonly scissorStrategy: ScissorStrategy = new ScissorStrategy();
    private strategiesMap = {
        [HAND_TYPE.PAPER]: this.paperStrategy,
        [HAND_TYPE.ROCK]: this.rockStrategy,
        [HAND_TYPE.SCISSOR]: this.scissorStrategy,
    };
    constructor() {}

    createStrategy(type: HAND_TYPE) {
        if (this.strategiesMap[type]) {
            return this.strategiesMap[type];
        }

        throw new Error('Type not found');
    }
}
