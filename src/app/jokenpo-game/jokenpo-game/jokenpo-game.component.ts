import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hand } from 'src/app/core/interfaces';
import { HandFactoryService } from 'src/app/core/services/hand-factory.service';
import { GameMatch, Player } from '../../core/models';

@Component({
    selector: 'app-jokenpo-game',
    templateUrl: './jokenpo-game.component.html',
    styleUrls: ['./jokenpo-game.component.scss'],
})
export class JokenpoGameComponent implements OnInit {
    gameConfigs: GameMatch;
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

            this.gameConfigs = new GameMatch(
                new Player(gameConfigsParsed.firstPlayer),
                new Player(gameConfigsParsed.secondPlayer),
                gameConfigsParsed.matchScoreEnd
            );
            this.listHands = this.handFactoryService.getAllHands();
        } else {
            // If there is no object in the URL redirect to welcome page
            this.router.navigate(['/welcome']);
        }
    }
}
