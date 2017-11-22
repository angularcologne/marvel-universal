import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Character, FullCharacter} from '../model/character';
import {environment} from '../../environments/environment';
import {MarvelQueryParams} from '../helper/marvel-query-params';
import {makeStateKey, TransferState} from "@angular/platform-browser";

const CHARACTERS = makeStateKey('CHARACTERS');


@Injectable()
export class CharacterService {


    constructor(private http: Http, private transferState: TransferState) {
    }

    getCharacters(queryParams: MarvelQueryParams = new MarvelQueryParams()): Observable<Character[]> {
        if (this.transferState.hasKey(CHARACTERS)) {
            return Observable.of(this.transferState.get(CHARACTERS,[]  as any))
                .do(() => this.transferState.remove(CHARACTERS));
        }
        return this.http.get(`${environment.marvelBaseUrl}/characters`, { search: queryParams})
            .map(response => response.json())
            .map(json => json.data.results)
            .do(characters => this.transferState.set(CHARACTERS, characters));
    }

    getCharacter(id: number): Observable<FullCharacter> {
        return this.http.get(`${environment.marvelBaseUrl}/characters/${id}`, { search: new MarvelQueryParams()})
            .map(response => response.json())
            .map(json => json.data.results[0]);
    }

}
