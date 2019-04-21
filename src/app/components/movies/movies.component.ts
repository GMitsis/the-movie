import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';
import { FormControl, Validators } from '@angular/forms';

import { PaginationService } from '../../services/paginations.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  

  baseUrl: string;
  posterSize: string;
  moviesList: any[];
  moviesListLength: number;
  
  searchParam: FormControl;
  
  query: any = {};

  pagination: any = {};

  constructor(
    private _moviesService: MoviesService,
    private _paginationService: PaginationService
    ) {}

  ngOnInit() {
    this.baseUrl = 'http://image.tmdb.org/t/p/';
    this.posterSize = 'w92';
    
    this.searchParam = new FormControl('', [Validators.required, Validators.minLength(3)]);  
  }

  initQuery() {
    const movie = this.searchParam.value;

    this.query = { 
      page: 1,
      query: movie,
      api_key: '85204a8cc33baf447559fb6d51b18313',
    }
  }

  onSubmit() {    
    this.initQuery();
    this.getMovies(); 
  }

  getMovies() {
    this._moviesService.getMovies(this.query)
      .subscribe(res => {
        this.moviesList = res['results']; 
        this.moviesListLength = res['total_results'];
  
        this.pagination = this._paginationService.setPagination(this.moviesListLength, this.query.page);  
      })
  }

  setPagination(page) {
    this.query.page = page;
    this.getMovies();
  }
}
