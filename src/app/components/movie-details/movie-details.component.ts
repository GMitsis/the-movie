import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieId: number;
  movie: any;
  
  baseUrl: string;
  posterSize: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.baseUrl = 'http://image.tmdb.org/t/p/';
    this.posterSize = 'w300';

    this._activatedRoute.params.subscribe(
      params => {
        this.movieId = +params['id'];
        this.getMoviedDetails();
      })
  }

  getMoviedDetails() {
    const params = {
      api_key: '85204a8cc33baf447559fb6d51b18313',
    };

    this._moviesService.getMovie(this.movieId, params)
      .subscribe(res => {
        this.movie = res;

        console.log('Movie Details:', this.movie);
      })
  }
}