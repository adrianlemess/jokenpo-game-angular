import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/core/models';

@Component({
    selector: 'app-scoreboard',
    templateUrl: './scoreboard.component.html',
    styleUrls: ['./scoreboard.component.scss'],
})
export class ScoreboardComponent implements OnInit {
    @Input()
    firstPlayer: Player;

    @Input()
    secondPlayer: Player;

    @Input()
    scoreboardTitle: string;

    constructor() {}

    ngOnInit(): void {}
}
