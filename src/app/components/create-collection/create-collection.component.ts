import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.scss']
})
export class CreateCollectionComponent implements OnInit {
  
  collectionForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.collectionForm = this._formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  createCollection() {
    const collection = this.collectionForm.value;
    
    const newCollection = {
      title: collection.title,
      description: collection.description,
      movies: []
    }

    const storedCollecions = JSON.parse(localStorage.getItem("movieCollections"));
    storedCollecions.push(newCollection);

    localStorage.setItem('movieCollections', JSON.stringify(storedCollecions));
    
    this.collectionForm.reset();
  }

}
