import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hand } from '../../core/interfaces';
import { HandFactoryService } from '../../core/services/hand-factory.service';
import { GameMatch, Player } from '../../core/models';
import { END_GAME_RESULT, PLAYER_TYPE } from 'src/app/core/enums';

@Component({
    selector: 'app-jokenpo-game',
    templateUrl: './jokenpo-game.component.html',
    styleUrls: ['./jokenpo-game.component.scss'],
})
export class JokenpoGameComponent implements OnInit {
    firstPlayer: Player;
    secondPlayer: Player;
    matchScoreEnd: number;
    disablePlayButton = false;
    delayPerRoundInMs: number;
    firstPlayerSelectedHand: Hand | null = null;
    secondPlayerSelectedHand: Hand | null = null;
    playerType = PLAYER_TYPE;
    listHands: Hand[];
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private handFactoryService: HandFactoryService
    ) {}

    ngOnInit(): void {
        const gameConfigsParam = this.route.snapshot.paramMap.get('gameConfigs');
        if (!!gameConfigsParam) {
            const gameConfigsParsed = JSON.parse(gameConfigsParam);

            const { firstPlayer, secondPlayer, matchScoreEnd, delayPerRoundInMs } = new GameMatch(
                new Player(gameConfigsParsed.firstPlayer),
                new Player(gameConfigsParsed.secondPlayer),
                gameConfigsParsed.matchScoreEnd
            );
            this.firstPlayer = firstPlayer;
            this.secondPlayer = secondPlayer;
            this.matchScoreEnd = matchScoreEnd;
            this.delayPerRoundInMs = delayPerRoundInMs;
            this.listHands = this.handFactoryService.getAllHands();
        } else {
            // If there is no object in the URL redirect to welcome page
            this.router.navigate(['/welcome']);
        }
    }

    onClickHand(hand: Hand) {
        this.firstPlayerSelectedHand = hand;
    }

    playMatch() {
        this.disablePlayButton = true;
        if (this.firstPlayer.playerType === PLAYER_TYPE.COMPUTER) {
            this.firstPlayerSelectedHand = this.handFactoryService.createHandRandom();
        }

        this.secondPlayerSelectedHand = this.handFactoryService.createHandRandom();

        const result = this.firstPlayerSelectedHand?.playAgainst(this.secondPlayerSelectedHand);

        switch (result) {
            case END_GAME_RESULT.WIN:
                this.firstPlayer.increaseScore();
                break;
            case END_GAME_RESULT.DEFEAT:
                this.secondPlayer.increaseScore();
                break;
            case END_GAME_RESULT.TIE:
            default:
                break;
        }

        console.log(this.delayPerRoundInMs);

        setTimeout(() => {
            this.resetRound();
        }, this.delayPerRoundInMs);
    }

    private resetRound() {
        this.firstPlayerSelectedHand = null;
        this.secondPlayerSelectedHand = null;
        this.disablePlayButton = false;
    }

    // Getters to improve readability on template
    get FirstPlayerType() {
        if (this.firstPlayer.playerType === PLAYER_TYPE.HUMAN) {
            return `${this.firstPlayer.playerType} (You)`;
        }
        return this.firstPlayer.playerType;
    }

    get IsFirstPlayerHuman() {
        return this.firstPlayer.playerType === this.playerType.HUMAN;
    }

    get IsPlayButtonDisabled() {
        return (this.IsFirstPlayerHuman && !this.firstPlayerSelectedHand) || this.disablePlayButton;
    }
}
