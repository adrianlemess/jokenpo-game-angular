import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hand } from '../../core/interfaces';
import { HandFactoryService } from '../../core/services/hand-factory.service';
import { Player } from '../../core/models';
import { END_GAME_RESULT, PLAYER_TYPE } from '../../core/enums';

@Component({
    selector: 'app-jokenpo-panel',
    templateUrl: './jokenpo-panel.component.html',
    styleUrls: ['./jokenpo-panel.component.scss'],
})
export class JokenpoPanelComponent implements OnInit {
    @Input()
    firstPlayer: Player;

    @Input()
    secondPlayer: Player;

    @Input()
    matchScoreEnd: number;

    @Input()
    delayPerRoundInMs: number;

    @Output()
    finishTheGame = new EventEmitter<Player>();

    // Variable used only on carousel
    listHands: Hand[];

    // Hands of each player, loaded when the user select a hand or during the play action
    firstPlayerSelectedHand: Hand | null = null;
    secondPlayerSelectedHand: Hand | null = null;

    // This variable is used for avoid any weird behavior after the play
    disableActionsButton = false;

    constructor(private handFactoryService: HandFactoryService) {}

    ngOnInit(): void {
        this.listHands = this.handFactoryService.getAllHands();
    }

    onClickHand(hand: Hand) {
        this.firstPlayerSelectedHand = hand;
    }

    playMatch() {
        // Set actions to true, to disable actions and avoid any weird behavior
        this.disableActionsButton = true;

        // We will only set firstPlayerSelectedHand when is computer x computer
        if (this.firstPlayer.playerType === PLAYER_TYPE.COMPUTER) {
            this.firstPlayerSelectedHand = this.handFactoryService.createHandRandom();
        }

        this.secondPlayerSelectedHand = this.handFactoryService.createHandRandom();

        const result = this.firstPlayerSelectedHand?.playAgainst(this.secondPlayerSelectedHand);

        // Increase score if some of the players win
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

        if (this.firstPlayer.score === this.matchScoreEnd) {
            this.finishTheGame.emit(this.firstPlayer);
        } else if (this.secondPlayer.score === this.matchScoreEnd) {
            this.finishTheGame.emit(this.secondPlayer);
        }

        // Reset values after the delayPerRoundInMs
        setTimeout(() => {
            this.resetRound();
        }, this.delayPerRoundInMs);
    }

    private resetRound() {
        this.firstPlayerSelectedHand = null;
        this.secondPlayerSelectedHand = null;
        this.disableActionsButton = false;
    }

    // Getters to improve readability on template
    get FirstPlayerType() {
        if (this.firstPlayer.playerType === PLAYER_TYPE.HUMAN) {
            return `${this.firstPlayer.playerType} (You)`;
        }
        return this.firstPlayer.playerType;
    }

    get IsFirstPlayerHuman() {
        return this.firstPlayer.playerType === PLAYER_TYPE.HUMAN;
    }

    get IsPlayButtonDisabled() {
        return (
            (this.IsFirstPlayerHuman && !this.firstPlayerSelectedHand) || this.disableActionsButton
        );
    }
}
