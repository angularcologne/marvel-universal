import {QueryEncoder, URLSearchParams} from '@angular/http';
import {Md5} from 'ts-md5/dist/md5';

const limit = 100;

const pk = 'bb7fe9c1f7bf3488e781ef127be435d31284d6c4';
const pub = '77b9daab1c2de48712f6250e8d20a597';


export class MarvelQueryParams extends URLSearchParams {
    constructor(query?: string, page?: number) {
        super();
        const ts = new Date().getTime();
        this.append('apikey',  pub);
        this.append('limit',  '' +  limit);
        this.append('orderBy',  '' +  '-modified');
        this.append('ts',  '' +  ts);
        this.append('hash',  '' +  Md5.hashStr(`${ts}${pk}${pub}`));


        if (query) {
            this.append('startsWith', query);
        }
        if (page) {
            this.append('offset',  '' +  page * limit);
        }
    }

}

