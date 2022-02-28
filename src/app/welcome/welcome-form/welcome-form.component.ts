import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PLAYER_TYPE } from '../../core/enums';

@Component({
    selector: 'app-welcome-form',
    templateUrl: './welcome-form.component.html',
    styleUrls: ['./welcome-form.component.scss'],
})
export class WelcomeFormComponent {
    playerType = PLAYER_TYPE;

    jokenpoForm = this.fb.group({
        firstPlayer: this.fb.group({
            username: ['', [Validators.required]],
            score: [0, [Validators.required, Validators.min(0)]],
            playerType: [this.playerType.HUMAN, [Validators.required]],
        }),
        secondPlayer: this.fb.group({
            username: ['', [Validators.required]],
            score: [0, [Validators.required]],
            playerType: [{ value: this.playerType.COMPUTER, disabled: true }],
        }),
        matchScoreEnd: [1, [Validators.required]],
    });

    constructor(private fb: FormBuilder, private router: Router) {}

    isRequired(controlName: string) {
        return (
            this.jokenpoForm.get(controlName)?.hasError('required') &&
            (this.jokenpoForm.get(controlName)?.dirty || this.jokenpoForm.get(controlName)?.touched)
        );
    }

    onSubmit(): void {
        const gameConfigs = JSON.stringify(this.jokenpoForm.getRawValue());
        this.router.navigate(['/game-session', { gameConfigs }]);
    }
}