import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    private _apiUrl = 'https://api.themoviedb.org/3'
    
    constructor(private _httpClient: HttpClient) {

    }
    get(path: string, params) {
        return this._httpClient.get(`${this._apiUrl}/${path}`, { params: params })
    }
}