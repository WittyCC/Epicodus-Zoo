import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div>
    <div *ngIf="childSelectedAnimal">
      <h1>Edit {{childSelectedAnimal.species}}'s Details</h1>
      <label>Enter the correct specie: </label>
      <input [(ngModel)]="childSelectedAnimal.species">
      <br>
      <label>Enter its new name: </label>
      <input [(ngModel)]="childSelectedAnimal.name">
      <br>
      <label>Enter the correct age: </label>
      <input [(ngModel)]="childSelectedAnimal.age">
      <br>
      <label>Is it a carnivore, herbivore, or omnivore? </label>
      <input [(ngModel)]="childSelectedAnimal.diet">
      <br>
      <label>Where will it be staying in the zoo? </label>
      <input [(ngModel)]="childSelectedAnimal.location">
      <br>
      <label>How many caretakers does it really need? </label>
      <input [(ngModel)]="childSelectedAnimal.caretakers">
      <br>
      <label>Is it male or female? </label>
      <input [(ngModel)]="childSelectedAnimal.sex">
      <br>
      <label>Input something that this animal likes (for real): </label>
      <input [(ngModel)]="childSelectedAnimal.like">
      <br>
      <label>Input something that this animal dislikes (for real): </label>
      <input [(ngModel)]="childSelectedAnimal.dislike">
      <br>
      <button (click)="doneButtonClicked()">Save Changes</button>
    </div>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
