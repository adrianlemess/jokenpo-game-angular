import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameMatch, Player } from '../../core/models';

@Component({
    selector: 'app-jokenpo-game',
    templateUrl: './jokenpo-game.component.html',
    styleUrls: ['./jokenpo-game.component.scss'],
})
export class JokenpoGameComponent implements OnInit {
    gameConfigs: GameMatch;
    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        const gameConfigsParam = this.route.snapshot.paramMap.get('gameConfigs');
        if (!!gameConfigsParam) {
            const gameConfigsParsed = JSON.parse(gameConfigsParam);

            this.gameConfigs = new GameMatch(
                new Player(gameConfigsParsed.firstPlayer),
                new Player(gameConfigsParsed.secondPlayer),
                gameConfigsParsed.matchScoreEnd
            );
        } else {
            // If there is no object in the URL redirect to welcome page
            this.router.navigate(['/welcome']);
        }
    }
}
