# Epicodus Zoo

#### By _**Witty Chang**_

## Planning

1. Configuration/Dependencies
  * TypeScript to make code more maintainable.
  * Use of client side model-view-components for framework (Angular 2).
  * Node.js modules for operation.
  * Bower components.

2. Specs
  * Please see program specifications below.

3. Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head

4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

5. Polish
  * Add styling for web page
  * Make README awesome

## Specifications
|Behavior|Input|Output|
|---|---|---|
|User (zoo staff) adds a newly-admitted animal to the registry|Species: "Arctic Fox"; Name: "Moon"; Age: 2; Diet: "Carnivore"; Location: "Northern Trail"; Caretakers: 5; Sex: "Female"; Likes: "Cool shade"; Dislikes: "Loud noises"| "Registration confirmed. Newly-admitted animal has been added to the database."|
|User (zoo staff) views list of animals logged by him/her|Search for animals logged by user|List showing all animals logged by user|
|User (zoo staff) views animals according to certain criteria such as age or diet|Search for all animals that are less than 2 years of age|List showing all animals that are less than 2 years of age|
|User (zoo staff) edits the details of an existing animal profile|Edit profile for Ocelot specie and change its name to Princess (mistakenly registered as male)|Edit Ocelot's name from Prince to Princess and save changes to database|

## What's Included

```
Epicodus-Zoo
    ├── .gitignore
    ├── bower.json
    ├── gulpfile.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── systemjs.config.js
    ├── tsconfig.js
    ├── app
    │    ├── animal-list.component.ts
    │    ├── animal.model.ts
    │    ├── app.component.ts
    │    ├── app.module.ts
    │    ├── completeness.pipe.ts
    │    ├── edit-animal.component.ts
    │    ├── main.ts
    │    └── new-animal.component.ts
    └── resources
          ├── images
          ├── js
          └── styles
```

## Prerequisites

You will need the following things properly installed on your computer.

* [Atom](https://atom.io/)
* [Node.js](https://nodejs.org/) (with NPM)
* [TypeScript](https://www.typescriptlang.org/)
* [Bower](https://bower.io/)
* Web browser software application of your choice (e.g. Google Chrome, Mozilla Firefox, etc.)

## Installation

* `git clone https://github.com/wcchang1382/Epicodus-Zoo`
* Navigate to the project folder.
* `npm install`
* `bower install`
* `gulp build`
* `gulp serve`

## Technologies Used

* Node Package Manager
* Bower
* TypeScript
* Angular 2

## Support and contact details

Please feel free to contact wcc1213@gmail.com if you have any questions, issues, concerns, comments or suggestions.

### License

_Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._

Copyright (c) 2017 **_Witty Chang_**
