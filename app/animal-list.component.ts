import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="youngAnimals">Young Animals (less than 2 years of age)</option>
    <option value="matureAnimals">Mature Animals (2 years of age and older)</option>
  </select>

  <ul>
    <li *ngFor="let currentAnimal of childAnimalList | maturity:filterByMaturity">Species: {{currentAnimal.species}} <br> Name: {{currentAnimal.name}} <br> Age: {{currentAnimal.age}} <br> Diet: {{currentAnimal.diet}} <br> Location: {{currentAnimal.location}} <br> Caretakers: {{currentAnimal.caretakers}} <br> Sex: {{currentAnimal.sex}} <br> Likes: {{currentAnimal.like}} <br> Dislikes: {{currentAnimal.dislike}} <br> <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit Details</button><br><br></li>
  </ul>
  `
  })

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByMaturity: string = " ";

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByMaturity = optionFromMenu;
  }
}
