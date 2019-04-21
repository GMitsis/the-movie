import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionMoviesComponent } from './collection-movies.component';

describe('CollectionMoviesComponent', () => {
  let component: CollectionMoviesComponent;
  let fixture: ComponentFixture<CollectionMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
