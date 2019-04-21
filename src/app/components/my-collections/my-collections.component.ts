import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-collections',
  templateUrl: './my-collections.component.html',
  styleUrls: ['../movies/movies.component.scss', './my-collections.component.scss']
})
export class MyCollectionsComponent implements OnInit {
  
  movieCollections: any[];
  
  myCollections: any[];

  constructor() { }

  ngOnInit() {    
    if (!localStorage.getItem('movieCollections')) {
      localStorage.setItem('movieCollections', JSON.stringify([]));      
    };
  
    this.myCollections = JSON.parse(localStorage.getItem("movieCollections"));
  }
}
