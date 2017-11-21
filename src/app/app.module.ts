import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {CharacterListComponent} from "./character-list/character-list.component";
import {CharacterCardComponent} from "./character-card/character-card.component";
import {ImageComponent} from "./image/image.component";
import {CharacterService} from "./services/character.service";
import {HttpModule} from "@angular/http";

@NgModule({
    declarations: [
        AppComponent,
        CharacterListComponent,
        CharacterCardComponent,
        ImageComponent],
    imports: [
        HttpModule,
        BrowserModule.withServerTransition({appId: 'my-app'}),
        RouterModule.forRoot([
            {path: '', component: AppComponent, pathMatch: 'full'},
            //    { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
            //    { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
        ])
    ],
    providers: [CharacterService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
