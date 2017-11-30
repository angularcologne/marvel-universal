import { Component, OnInit } from '@angular/core';
import {FullCharacter} from '../model/character';
import {CharacterService} from '../services/character.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styles: []
})
export class CharacterDetailComponent implements OnInit {

    constructor(private route: ActivatedRoute, private characterService: CharacterService) {
    }

    character: FullCharacter;

    ngOnInit() {
        this.route.params
            .map(params => params['id'])
            .flatMap(id => this.characterService.getCharacter(id))
            .subscribe(character =>  this.character = character);
    }

}
