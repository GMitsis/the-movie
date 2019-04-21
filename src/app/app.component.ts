import { Component, OnInit } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'the-movie';

  selectedValue: string = "";

  items = [
    { value: "0", view: "zero" },
    { value: "1", view: "one" },
    { value: "2", view: "Two" }
  ];

  activeLink: string;
  
  baseUrl: string;
  posterSize: string;
  moviesList: any[];

  constructor(private _moviesService: MoviesService) {

  }

  ngOnInit() {
    this.activeLink = 'movies'
    // this.baseUrl = 'http://image.tmdb.org/t/p/';
    // this.posterSize = 'w92';

    // this.getMovies();
  }

  getMovies() {
    // let path = 'search/movie';

    let params = {
      api_key: '85204a8cc33baf447559fb6d51b18313',
      query: 'aveng'
    };

    this._moviesService.getMovies(params)
      .subscribe(res => {
        this.moviesList = res['results']; 
        console.log('Movies:', res);  
      })
  }

  viewDetails() {
    console.log('View Details');
  }
}
