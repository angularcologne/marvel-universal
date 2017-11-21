import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../services/character.service';
import {Observable, Subject} from 'rxjs';
import {Character, FullCharacter} from '../model/character';
import {MarvelQueryParams} from '../helper/marvel-query-params';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters$: Observable<Character[]>;

  selectedCharacter: FullCharacter;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characters$ = this.characterService.getCharacters(new MarvelQueryParams(null, 1));
  }

  select(id: number) {
    this.characterService.getCharacter(id).subscribe(character => this.selectedCharacter = character);
  }

}
