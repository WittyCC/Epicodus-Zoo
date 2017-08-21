import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container" style="background-image:url('https://www.hdwallpapers.in/walls/owl_4k_5k-wide.jpg'); background-size: cover; color: white;">
    <h1 style="text-align:center">EPICODUS ZOO</h1>
    <h2>Current Registered Animals for {{month}}/{{day}}/{{year}}</h2>
    <animal-list [childAnimalList]="fullList" (clickSender)="editAnimal($event)"></animal-list>
    <hr>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  selectedAnimal = null;

  fullList: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises'),
    new Animal('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based'),
    new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'Female', 'Delicate roots and leaves', 'Loud Noises')
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.fullList.push(newAnimalFromChild);
  }
}
