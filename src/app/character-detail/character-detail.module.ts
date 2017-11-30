import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CharacterDetailComponent} from './character-detail.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: CharacterDetailComponent, pathMatch: 'full'},
        ])
    ],
    providers: [
        ],
    declarations: [CharacterDetailComponent]
})
export class CharacterDetailModule {
}
