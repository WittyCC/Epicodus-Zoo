import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Epicodus Zoo</h1>
    <h2>Logged Animals for {{month}}/{{day}}/{{year}}</h2>
  </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  firstAnimal = {
    species: "Arctic Fox",
    name: "Moon",
    age: 2,
    diet: "Carnivore",
    location: "Northern Trail",
    caretakers: 5,
    sex: "Female",
    likes: "Cool shade",
    dislikes: "Loud noises"
  }
}
