import { TestBed } from '@angular/core/testing';
import { END_GAME_RESULT, HAND_TYPE } from '../enums';
import { PaperHand, RockHand, ScissorHand } from '../models';

import { HandFactoryService } from './hand-factory.service';

describe('HandFactoryService', () => {
    let service: HandFactoryService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(HandFactoryService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('Should be tie when paper is against paper', () => {
        const fistPlayer = service.create(HAND_TYPE.PAPER);
        const secondPlayer = service.create(HAND_TYPE.PAPER);

        expect(fistPlayer.playAgainst(secondPlayer)).toEqual(END_GAME_RESULT.TIE);
    });

    it('Should be tie when rock is against rock', () => {
        const fistPlayer = service.create(HAND_TYPE.ROCK);
        const secondPlayer = service.create(HAND_TYPE.ROCK);

        expect(fistPlayer.playAgainst(secondPlayer)).toEqual(END_GAME_RESULT.TIE);
    });

    it('Should be tie when scissor is against scissor', () => {
        const fistPlayer = service.create(HAND_TYPE.SCISSOR);
        const secondPlayer = service.create(HAND_TYPE.SCISSOR);

        expect(fistPlayer.playAgainst(secondPlayer)).toEqual(END_GAME_RESULT.TIE);
    });

    it('Should be win for scissor when is against paper', () => {
        const fistPlayer = service.create(HAND_TYPE.SCISSOR);
        const secondPlayer = service.create(HAND_TYPE.PAPER);

        expect(fistPlayer.playAgainst(secondPlayer)).toEqual(END_GAME_RESULT.WIN);
    });

    it('Should be win for rock when is against scissor', () => {
        const fistPlayer = service.create(HAND_TYPE.ROCK);
        const secondPlayer = service.create(HAND_TYPE.SCISSOR);

        expect(fistPlayer.playAgainst(secondPlayer)).toEqual(END_GAME_RESULT.WIN);
    });

    it('Should be win for paper when is against rock', () => {
        const fistPlayer = service.create(HAND_TYPE.PAPER);
        const secondPlayer = service.create(HAND_TYPE.ROCK);

        expect(fistPlayer.playAgainst(secondPlayer)).toEqual(END_GAME_RESULT.WIN);
    });

    it('Should be defeat for paper when is against scissor', () => {
        const fistPlayer = service.create(HAND_TYPE.PAPER);
        const secondPlayer = service.create(HAND_TYPE.SCISSOR);

        expect(fistPlayer.playAgainst(secondPlayer)).toEqual(END_GAME_RESULT.DEFEAT);
    });

    it('Should be defeat for scissor when is against rock', () => {
        const fistPlayer = service.create(HAND_TYPE.SCISSOR);
        const secondPlayer = service.create(HAND_TYPE.ROCK);

        expect(fistPlayer.playAgainst(secondPlayer)).toEqual(END_GAME_RESULT.DEFEAT);
    });

    it('Should be defeat for rock when is against paper', () => {
        const fistPlayer = service.create(HAND_TYPE.ROCK);
        const secondPlayer = service.create(HAND_TYPE.PAPER);

        expect(fistPlayer.playAgainst(secondPlayer)).toEqual(END_GAME_RESULT.DEFEAT);
    });
});
