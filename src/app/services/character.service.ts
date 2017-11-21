import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Character, FullCharacter} from '../model/character';
import {environment} from '../../environments/environment';
import {MarvelQueryParams} from '../helper/marvel-query-params';

@Injectable()
export class CharacterService {

    constructor(private http: Http) {
    }

    getCharacters(queryParams: MarvelQueryParams = new MarvelQueryParams()): Observable<Character[]> {
        return this.http.get(`${environment.marvelBaseUrl}/characters`, { search: queryParams})
            .map(response => response.json())
            .map(json => json.data.results);
    }

    getCharacter(id: number): Observable<FullCharacter> {
        return this.http.get(`${environment.marvelBaseUrl}/characters/${id}`, { search: new MarvelQueryParams()})
            .map(response => response.json())
            .map(json => json.data.results[0]);
    }

}
