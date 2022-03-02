import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { render, screen, waitFor } from '@testing-library/angular';
import { createMock } from '@testing-library/angular/jest-utils';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TestingModule } from '../../../testing/testing.module';
import { JokenpoPanelComponent } from '../jokenpo-panel/jokenpo-panel.component';
import { JokenpoGameComponent } from './jokenpo-game.component';
import { DummyComponent } from '../../../testing/dummy/dummy.component';
import { getMockProviderActivatedRoute } from '../../../testing/utils';
import { PaperStrategy, RockStrategy, ScissorStrategy } from '../../core/strategies';
import { PaperHand, RockHand, ScissorHand } from '../../core/models';
import {
    COMPUTER_COMPUTER_MOCK,
    HUMAN_COMPUTER_MOCK,
    LIST_IMPORTS,
    playMatchHumanComputer,
} from './testing';
import { HandFactoryService } from '../../core/services/hand-factory.service';
import { JokenpoStrategyFactoryService } from '../../core/services/jokenpo-strategy-factory.service';
import { HAND_TYPE } from '../../core/enums';
/**
 * I've tried this test with testing library but I didn't manage to make the router
 * navigation work inside the test
 */
describe('JokenpoGameComponent with TestBed and without query params', () => {
    let component: JokenpoGameComponent;
    let fixture: ComponentFixture<JokenpoGameComponent>;
    let location: Location;
    let router: Router;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [JokenpoGameComponent, JokenpoPanelComponent, DummyComponent],
                imports: [
                    TestingModule,
                    ReactiveFormsModule,
                    MatButtonModule,
                    MatCardModule,
                    MatInputModule,
                    MatRadioModule,
                    MatSelectModule,
                    RouterTestingModule.withRoutes([
                        {
                            path: 'welcome',
                            component: DummyComponent,
                        },
                        {
                            path: 'game-session',
                            component: JokenpoGameComponent,
                        },
                    ]),
                ],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        router = TestBed.inject(Router);
        location = TestBed.inject(Location);
        jest.spyOn(router, 'navigate');

        fixture = TestBed.createComponent(JokenpoGameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('When the component start without queryParam should redirect to /welcome page', fakeAsync(() => {
        expect(router.navigate).toHaveBeenCalled();
        expect(router.navigate).toHaveBeenCalledWith(['/welcome']);

        expect(location.path()).toBe('/welcome');
    }));
});

describe('Jokenpo game integration tests', () => {
    afterEach(() => {
        jest.clearAllMocks();
        jest.clearAllTimers();
    });
    test('Should select the rock hand on carousel when click on rock hand toggle button', async () => {
        await render(JokenpoGameComponent, {
            declarations: [JokenpoPanelComponent],
            imports: [...LIST_IMPORTS],
            componentProviders: [getMockProviderActivatedRoute(HUMAN_COMPUTER_MOCK)],
        });

        const buttonRock = screen.getByTestId('hand-button-rock');
        buttonRock.click();
        await waitFor(() => {
            // It has two carousels and we want to check the first
            const carouselRock = screen.queryAllByTestId('carousel-rock')[0];
            expect(carouselRock.parentNode).toHaveClass('active');
        });
    });

    test('Should select the paper hand on carousel when click on paper hand toggle button', async () => {
        await render(JokenpoGameComponent, {
            declarations: [JokenpoPanelComponent],
            imports: [...LIST_IMPORTS],
            componentProviders: [getMockProviderActivatedRoute(HUMAN_COMPUTER_MOCK)],
        });

        const buttonPaper = screen.getByTestId('hand-button-paper');
        buttonPaper.click();
        await waitFor(() => {
            // It has two carousels and we want to check the first
            const carouselPaper = screen.queryAllByTestId('carousel-paper')[0];
            expect(carouselPaper.parentNode).toHaveClass('active');
        });
    });

    test('Should select the scissor hand on carousel when click on scissor hand toggle button', async () => {
        await render(JokenpoGameComponent, {
            declarations: [JokenpoPanelComponent],
            imports: [...LIST_IMPORTS],
            componentProviders: [getMockProviderActivatedRoute(HUMAN_COMPUTER_MOCK)],
        });

        const buttonScissor = screen.getByTestId('hand-button-scissor');
        buttonScissor.click();
        await waitFor(() => {
            // It has two carousels and we want to check the first
            const carouselScissor = screen.queryAllByTestId('carousel-scissor')[0];
            expect(carouselScissor.parentNode).toHaveClass('active');
        });
    });

    test('Should play button be disabled when there is no hand selected', async () => {
        await render(JokenpoGameComponent, {
            declarations: [JokenpoPanelComponent],
            imports: [...LIST_IMPORTS],
            componentProviders: [getMockProviderActivatedRoute(HUMAN_COMPUTER_MOCK)],
        });

        // Check if button is disable
        await waitFor(() => {
            expect(screen.getByRole('button', { name: /Play/i }).closest('button')).toBeDisabled();
        });
    });

    test('Should play button be enable when there a hand is selected', async () => {
        await render(JokenpoGameComponent, {
            declarations: [JokenpoPanelComponent],
            imports: [...LIST_IMPORTS],
            componentProviders: [getMockProviderActivatedRoute(HUMAN_COMPUTER_MOCK)],
        });
        // Select a hand
        const buttonPaper = screen.getByTestId('hand-button-paper');
        buttonPaper.click();

        // Check if button is enable
        await waitFor(() => {
            expect(
                screen.getByRole('button', { name: /Play/i }).closest('button')
            ).not.toBeDisabled();
        });
    });

    test('Should play a tie hand paper x paper', async () => {
        await playMatchHumanComputer({
            gameMatchMock: HUMAN_COMPUTER_MOCK,
            firstPlayerHand: new PaperHand(new PaperStrategy()),
            secondPlayerHand: new PaperHand(new PaperStrategy()),
            firstPlayerScoreExpected: 0,
            secondPlayerScoreExpected: 0,
        });
    });

    test('Should play a tie hand rock x rock', async () => {
        await playMatchHumanComputer({
            gameMatchMock: HUMAN_COMPUTER_MOCK,
            firstPlayerHand: new RockHand(new RockStrategy()),
            secondPlayerHand: new RockHand(new RockStrategy()),
            firstPlayerScoreExpected: 0,
            secondPlayerScoreExpected: 0,
        });
    });

    test('Should play win hand Paper x Rock', async () => {
        await playMatchHumanComputer({
            gameMatchMock: HUMAN_COMPUTER_MOCK,
            firstPlayerHand: new PaperHand(new PaperStrategy()),
            secondPlayerHand: new RockHand(new RockStrategy()),
            firstPlayerScoreExpected: 1,
            secondPlayerScoreExpected: 0,
        });
    });

    test('Should play win hand Rock x Scissor', async () => {
        await playMatchHumanComputer({
            gameMatchMock: HUMAN_COMPUTER_MOCK,
            firstPlayerHand: new ScissorHand(new ScissorStrategy()),
            secondPlayerHand: new RockHand(new RockStrategy()),
            firstPlayerScoreExpected: 0,
            secondPlayerScoreExpected: 1,
        });
    });

    test('Should play win hand Scissor x Paper', async () => {
        await playMatchHumanComputer({
            gameMatchMock: HUMAN_COMPUTER_MOCK,
            firstPlayerHand: new ScissorHand(new ScissorStrategy()),
            secondPlayerHand: new PaperHand(new PaperStrategy()),
            firstPlayerScoreExpected: 1,
            secondPlayerScoreExpected: 0,
        });
    });

    test('Should check the instructions when is Human x Computer', async () => {
        await render(JokenpoGameComponent, {
            declarations: [JokenpoPanelComponent],
            imports: [...LIST_IMPORTS],
            componentProviders: [getMockProviderActivatedRoute(HUMAN_COMPUTER_MOCK)],
        });

        expect(
            screen.getByText('Select a hand and click play to start a match')
        ).toBeInTheDocument();
    });

    test('Should check the instructions when is Computer x Computer', async () => {
        await render(JokenpoGameComponent, {
            declarations: [JokenpoPanelComponent],
            imports: [...LIST_IMPORTS],
            componentProviders: [getMockProviderActivatedRoute(COMPUTER_COMPUTER_MOCK)],
        });

        expect(screen.getByText('Click play to watch a match')).toBeInTheDocument();
    });

    test('Should be enable Play button when is COMPUTER X COMPUTER', async () => {
        await render(JokenpoGameComponent, {
            declarations: [JokenpoPanelComponent],
            imports: [...LIST_IMPORTS],
            componentProviders: [getMockProviderActivatedRoute(COMPUTER_COMPUTER_MOCK)],
        });

        await waitFor(() => {
            expect(
                screen.getByRole('button', { name: /Play/i }).closest('button')
            ).not.toBeDisabled();
        });
    });
    test('Should not show toggle buttons with hands when is COMPUTER X COMPUTER', async () => {
        await render(JokenpoGameComponent, {
            declarations: [JokenpoPanelComponent],
            imports: [...LIST_IMPORTS],
            componentProviders: [getMockProviderActivatedRoute(COMPUTER_COMPUTER_MOCK)],
        });

        expect(screen.queryByText('hand-button-paper')).not.toBeInTheDocument();
        expect(screen.queryByText('hand-button-rock')).not.toBeInTheDocument();
        expect(screen.queryByText('hand-button-scissor')).not.toBeInTheDocument();
    });

    test('Should play a match COMPUTER X COMPUTER', async () => {
        const handFactoryService = createMock(HandFactoryService);
        const jokenpoStrategyFactoryService = new JokenpoStrategyFactoryService();

        handFactoryService.getAllHands = jest.fn(() => [
            new ScissorHand(jokenpoStrategyFactoryService.createStrategy(HAND_TYPE.SCISSOR)),
            new PaperHand(jokenpoStrategyFactoryService.createStrategy(HAND_TYPE.PAPER)),
            new RockHand(jokenpoStrategyFactoryService.createStrategy(HAND_TYPE.ROCK)),
        ]);

        // As both will be computers, I need to return fixed values for both computers hand
        handFactoryService.createHandRandom = jest
            .fn()
            .mockReturnValueOnce(
                new PaperHand(jokenpoStrategyFactoryService.createStrategy(HAND_TYPE.PAPER))
            )
            .mockReturnValueOnce(
                new RockHand(jokenpoStrategyFactoryService.createStrategy(HAND_TYPE.ROCK))
            )
            .mockReturnValueOnce(
                new RockHand(jokenpoStrategyFactoryService.createStrategy(HAND_TYPE.ROCK))
            )
            .mockReturnValueOnce(
                new ScissorHand(jokenpoStrategyFactoryService.createStrategy(HAND_TYPE.SCISSOR))
            );

        await render(JokenpoGameComponent, {
            declarations: [JokenpoPanelComponent],
            imports: [...LIST_IMPORTS],
            componentProviders: [
                getMockProviderActivatedRoute(COMPUTER_COMPUTER_MOCK),
                {
                    provide: HandFactoryService,
                    useValue: handFactoryService,
                },
            ],
        });

        let playButton = screen.getByRole('button', { name: /Play/i }).closest('button');
        playButton?.click();

        await waitFor(() => {
            expect(screen.getByTestId('first-player-score')).toHaveTextContent(`1`);
            expect(screen.getByTestId('second-player-score')).toHaveTextContent(`0`);
        });

        await waitFor(() => {
            expect(
                screen.getByRole('button', { name: /Play/i }).closest('button')
            ).not.toBeDisabled();

            playButton = screen.getByRole('button', { name: /Play/i }).closest('button');
            playButton?.click();
        });

        await waitFor(() => {
            expect(screen.getByTestId('first-player-score')).toHaveTextContent(`2`);
            expect(screen.getByTestId('second-player-score')).toHaveTextContent(`0`);
        });
    });

    test('Should show a finish game view when the game is finished with the match winner name', async () => {
        const handFactoryService = createMock(HandFactoryService);
        const jokenpoStrategyFactoryService = new JokenpoStrategyFactoryService();

        handFactoryService.getAllHands = jest.fn(() => [
            new ScissorHand(jokenpoStrategyFactoryService.createStrategy(HAND_TYPE.SCISSOR)),
            new PaperHand(jokenpoStrategyFactoryService.createStrategy(HAND_TYPE.PAPER)),
            new RockHand(jokenpoStrategyFactoryService.createStrategy(HAND_TYPE.ROCK)),
        ]);

        // As both will be computers, I need to return fixed values for both computers hand
        handFactoryService.createHandRandom = jest
            .fn()
            // First round
            .mockReturnValueOnce(
                new PaperHand(jokenpoStrategyFactoryService.createStrategy(HAND_TYPE.PAPER))
            )
            .mockReturnValueOnce(
                new RockHand(jokenpoStrategyFactoryService.createStrategy(HAND_TYPE.ROCK))
            )
            // Second round
            .mockReturnValueOnce(
                new PaperHand(jokenpoStrategyFactoryService.createStrategy(HAND_TYPE.PAPER))
            )
            .mockReturnValueOnce(
                new RockHand(jokenpoStrategyFactoryService.createStrategy(HAND_TYPE.ROCK))
            );

        await render(JokenpoGameComponent, {
            declarations: [JokenpoPanelComponent],
            imports: [...LIST_IMPORTS],
            componentProviders: [
                getMockProviderActivatedRoute({ ...COMPUTER_COMPUTER_MOCK, matchScoreEnd: 2 }),
                {
                    provide: HandFactoryService,
                    useValue: handFactoryService,
                },
            ],
        });

        let playButton = screen.getByRole('button', { name: /Play/i }).closest('button');
        playButton?.click();

        await waitFor(() => {
            expect(screen.getByTestId('first-player-score')).toHaveTextContent(`1`);
            expect(screen.getByTestId('second-player-score')).toHaveTextContent(`0`);
        });

        await waitFor(() => {
            expect(
                screen.getByRole('button', { name: /Play/i }).closest('button')
            ).not.toBeDisabled();

            playButton = screen.getByRole('button', { name: /Play/i }).closest('button');
            playButton?.click();
        });

        await waitFor(() => {
            expect(
                screen.getByText('The game has ended and the winner was R2D2')
            ).toBeInTheDocument();
            expect(
                screen
                    .getByRole('button', { name: /Play again with the same configs/i })
                    .closest('button')
            ).toBeInTheDocument();
            expect(
                screen.getByRole('button', { name: /Change game configs/i }).closest('button')
            ).toBeInTheDocument();
        });
    });
});
