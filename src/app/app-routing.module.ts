import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MyCollectionsComponent } from './components/my-collections/my-collections.component';
import { CollectionMoviesComponent } from './components/collection-movies/collection-movies.component';
import { CreateCollectionComponent } from './components/create-collection/create-collection.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MoviesComponent,
    children: [
      {
        path: 'details/:id',
        component: MovieDetailsComponent
      }
    ]
  },
  {
    path: 'my-collections',
    component: MyCollectionsComponent,
    children: [
      {
        path: ':title',
        component: CollectionMoviesComponent 
    
      }
    ]
  },
  {
    path: 'create-collection',
    component: CreateCollectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
