import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameMatch, Player } from '../../core/models';

/**
 * This component is responsible to orchestrate the result of a game, when it ends and also
 * give the user the possibility of reset a game after ends.
 */
@Component({
    selector: 'app-jokenpo-game',
    templateUrl: './jokenpo-game.component.html',
    styleUrls: ['./jokenpo-game.component.scss'],
})
export class JokenpoGameComponent {
    // Configs variables loaded on ngOnInit from route params
    firstPlayer: Player;
    secondPlayer: Player;
    matchScoreEnd: number;
    delayPerRoundInMs: number;

    gameInProgress: boolean;
    winnerPlayer: Player | null;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.gameInProgress = true;
        this.initializeParamsOrRedirectToWelcomePage();
    }

    initializeParamsOrRedirectToWelcomePage() {
        const gameConfigsParam = this.route.snapshot.paramMap.get('gameConfigs');
        if (!!gameConfigsParam) {
            const gameConfigsParsed = JSON.parse(gameConfigsParam);

            const { firstPlayer, secondPlayer, matchScoreEnd, delayPerRoundInMs } = new GameMatch(
                new Player(gameConfigsParsed.firstPlayer),
                new Player(gameConfigsParsed.secondPlayer),
                gameConfigsParsed.matchScoreEnd,
                gameConfigsParsed.delayPerRoundInMs
            );
            this.firstPlayer = firstPlayer;
            this.secondPlayer = secondPlayer;
            this.matchScoreEnd = matchScoreEnd;
            this.delayPerRoundInMs = delayPerRoundInMs;
        } else {
            // If there is no object in the URL redirect to welcome page
            this.navigateToWelcomePage();
        }
    }

    onFinishTheGame(player: Player) {
        this.winnerPlayer = player;
        this.gameInProgress = false;
    }

    resetGame() {
        this.gameInProgress = true;
        this.winnerPlayer = null;
        this.initializeParamsOrRedirectToWelcomePage();
    }

    navigateToWelcomePage() {
        this.router.navigate(['/welcome']);
    }
}
