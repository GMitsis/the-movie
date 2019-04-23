import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
@Injectable({
    providedIn: 'root'
})

export class MoviesService {

    private searchMovieUrl = 'search/movie';
    private movieDetailsUrl = 'movie';
    private sessionIdUrl = 'authentication/guest_session/new';
    
    constructor(private _apiService: ApiService) {

    }

    getMovies(params) {
        return this._apiService.get(`${this.searchMovieUrl}`, params);
    }

    getMovie(id: number, params) {
        return this._apiService.get(`${this.movieDetailsUrl}/${id}`, params);
    }

    getSessionId(params) {
        return this._apiService.get(`${this.sessionIdUrl}`, params);
    }

    rateMovie(id, body, params) {
        return this._apiService.post(`${this.movieDetailsUrl}/${id}/rating`, body, params);
    }
}