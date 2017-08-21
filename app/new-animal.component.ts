import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div class="container">
    <h1>Add New Animal to the Database</h1>
    <div>
      <label>Enter animal specie: </label>
      <input #newSpecies>
    </div>
    <br>
    <div>
      <label>What is its name? </label>
      <input #newName>
    </div>
    <br>
    <div>
      <label>What is its approximate age? </label>
      <input #newAge>
    </div>
    <br>
    <div>
      <label>How would you classify it based on what it eats? </label>
      <input #newDiet>
    </div>
    <br>
    <div>
      <label>Where is its new home in the zoo? </label>
      <input #newLocation>
    </div>
    <br>
    <div>
      <label>How many caretakers does it need? </label>
      <input #newCaretakers>
    </div>
    <br>
    <div>
      <label>What is its gender? </label>
      <input #newSex>
    </div>
    <br>
    <div>
      <label>Input something that this animal likes: </label>
      <input #newLike>
    </div>
    <br>
    <div>
      <label>Input something that this animal dislikes: </label>
      <input #newDislike>
    </div>
    <br>
    <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLike.value, newDislike.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLike.value=''; newDislike.value='';">Register</button>
  </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, like: string, dislike: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, like, dislike);

    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
