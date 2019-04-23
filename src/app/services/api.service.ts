import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, catchError } from  'rxjs/operators';


@Injectable({
    providedIn: 'root'
})

export class ApiService {
    private _apiUrl = 'https://api.themoviedb.org/3';
    private _apiKey = '85204a8cc33baf447559fb6d51b18313';
    
    constructor(private _httpClient: HttpClient) {

    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            return of(result as T);
        }
    }

    get(path: string, params: HttpParams = new HttpParams()) {
        return this._httpClient.get(`${this._apiUrl}/${path}`, { params: params })
            .pipe(
                catchError(this.handleError<any[]>())
            )
    }

    post(path: string, body, params: HttpParams = new HttpParams()) {
        return this._httpClient.post(`${this._apiUrl}/${path}`, body, { params: params })
            .pipe(
                catchError(this.handleError<any[]>())
            );
    }
}