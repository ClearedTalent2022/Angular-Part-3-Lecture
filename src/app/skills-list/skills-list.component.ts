import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css']
})
export class SkillsListComponent implements OnInit {

  languages: string[] = [
    "JavaScript",
    "C#",
    "Java",
    "Python",
    "TypeScript"
  ]

  skillsError: string = "red";

  imgUrl: string = "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg";

  // Instead of having this function just
  // log something to the console, let's
  // have this function delete one of the 
  // languages out of the languages array
  removeSkill() {
    // How do we remove an item from an array
    // in javascript/typescript?
    // There are a number of ways to remove
    // elements from arrays, but let's just 
    // remove the last item to keep it simple
    this.languages.pop();
  }

  constructor() { }

  ngOnInit() {
  }

}
