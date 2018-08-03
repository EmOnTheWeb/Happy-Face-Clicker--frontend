import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

import { Face } from '../face'
import { Observable } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { environment } from '../environments/environment';


@Injectable()
export class FaceService {

    constructor(private http: Http) { }

    private serverApi= `${this.serverApi}/environment.apiUrl`;

    public getFrowns():Observable<Face[]> {

        let URI = `faces/frowns`;
        return this.http.get(URI)
        .pipe(
            map((res) => res.json())
        );
    }

    public getSmile():Observable<Face[]> {

        let URI = `faces/smile`;
        return this.http.get(URI)
        .pipe(
            map((res) => res.json())
        );
    }
}