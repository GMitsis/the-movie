import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
@Injectable({
    providedIn: 'root'
})

export class MoviesService {

    private searchMovieUrl = 'search/movie';
    private movieDetailsUrl = 'movie';

    constructor(private _apiService: ApiService) {

    }

    getMovies(params) {
        return this._apiService.get(`${this.searchMovieUrl}`, params);
    }

    getMovie(id: number, params) {
        return this._apiService.get(`${this.movieDetailsUrl}/${id}`, params);
    }
}