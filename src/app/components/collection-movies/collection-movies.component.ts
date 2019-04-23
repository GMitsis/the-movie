import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collection-movies',
  templateUrl: './collection-movies.component.html',
  styleUrls: ['./collection-movies.component.scss']
})
export class CollectionMoviesComponent implements OnInit {
  
  collection: any;
  movieTitle: string;

  constructor(
    private _activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    const collections = JSON.parse(localStorage.getItem("movieCollections"));

    this._activatedRoute.params.subscribe(
      params => {
        this.movieTitle = params['title'];
        this.collection = collections.find(item => item.title === this.movieTitle);
      })

  }
}
