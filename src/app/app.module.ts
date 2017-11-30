import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {CharacterListComponent} from "./character-list/character-list.component";
import {CharacterCardComponent} from "./character-card/character-card.component";
import {ImageComponent} from "./image/image.component";
import {CharacterService} from "./services/character.service";
import {HttpModule} from "@angular/http";
import {CharacterDetailComponent} from './character-detail/character-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        CharacterListComponent,
        CharacterCardComponent,
        CharacterListComponent,
        ImageComponent],
    imports: [
        HttpModule,
        BrowserModule.withServerTransition({appId: 'my-app'}),
        BrowserTransferStateModule,
        RouterModule.forRoot([
            { path: 'character/:id', loadChildren: './character-detail/character-detail.module#CharacterDetailModule'},
            //    { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
            {path: '', component: CharacterListComponent, pathMatch: 'full'}
        ])
    ],
    providers: [CharacterService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
