import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
    declarations: [],
    imports: [NoopAnimationsModule, RouterTestingModule],
    exports: [NoopAnimationsModule, RouterTestingModule],
    providers: [],
})
export class TestingModule {}
