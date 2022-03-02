import { PaperHand, RockHand, ScissorHand } from '../../../core/models';
import { render, screen, fireEvent, waitFor } from '@testing-library/angular';

import { JokenpoStrategyFactoryService } from '../../../core/services/jokenpo-strategy-factory.service';
import { PlayMatch } from './types';
import { HandFactoryService } from '../../../core/services/hand-factory.service';
import { createMock } from '@testing-library/angular/jest-utils';
import { HAND_TYPE } from '../../../core/enums';
import { JokenpoGameComponent } from '../jokenpo-game.component';
import { JokenpoPanelComponent } from '../../jokenpo-panel/jokenpo-panel.component';
import { LIST_IMPORTS } from './mocks';
import { getMockProviderActivatedRoute } from '../../../../testing/utils';

/**
 *
 * This method is a utils method to play a match and check the score passed
 * Should be only used with Human x Computer config
 *
 * And should be called with await:
 * e.g. await playMatchHumanComputer(...)
 */
export const playMatchHumanComputer = async (data: PlayMatch) => {
    const handFactoryService = createMock(HandFactoryService);
    const jokenpoStrategyFactoryService = new JokenpoStrategyFactoryService();
    handFactoryService.getAllHands = jest.fn(() => [
        new ScissorHand(jokenpoStrategyFactoryService.createStrategy(HAND_TYPE.SCISSOR)),
        new PaperHand(jokenpoStrategyFactoryService.createStrategy(HAND_TYPE.PAPER)),
        new RockHand(jokenpoStrategyFactoryService.createStrategy(HAND_TYPE.ROCK)),
    ]);

    handFactoryService.createHandRandom = jest.fn(() => {
        return data.secondPlayerHand;
    });

    await render(JokenpoGameComponent, {
        declarations: [JokenpoPanelComponent],
        imports: [...LIST_IMPORTS],
        componentProviders: [
            getMockProviderActivatedRoute(data.gameMatchMock),
            {
                provide: HandFactoryService,
                useValue: handFactoryService,
            },
        ],
    });
    const actionHandButton = screen.getByTestId(`hand-button-${data.firstPlayerHand.name}`);
    actionHandButton.click();

    await waitFor(() => {
        const playButton = screen.getByRole('button', { name: /Play/i }).closest('button');
        playButton?.click();
    });

    await waitFor(() => {
        expect(screen.getByTestId('first-player-score')).toHaveTextContent(
            `${data.firstPlayerScoreExpected}`
        );
        expect(screen.getByTestId('second-player-score')).toHaveTextContent(
            `${data.secondPlayerScoreExpected}`
        );
    });
};
