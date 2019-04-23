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
  
  sessionId: string;

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
      })
  }
  
  rateMovie() {
    const query = { 
      api_key: '85204a8cc33baf447559fb6d51b18313',
    }

    this._moviesService.getSessionId(query)
      .subscribe(res => {
        this.sessionId = res['guest_session_id'];

        this.setRating();
        console.log('Session Id:', this.sessionId);
      })


  }

  setRating() {
    const query = { 
      api_key: '85204a8cc33baf447559fb6d51b18313',
      guest_session_id: this.sessionId
    }

    const rating = {
      value: 8.5
    };

    this._moviesService.rateMovie(this.movieId, rating, query)
      .subscribe(res => {
        console.log('Res:', res) 
      })

  }
}