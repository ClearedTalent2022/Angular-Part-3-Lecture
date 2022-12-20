import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Angular-Part1";
  // name: string = "Pearce Odegard";

  author = {
    name: "Pearce Odegard",
    role: "Lead Instructor"
  }

  changeColor: boolean = false;

  // now that we have this alternateColor
  // variable, we could create a function
  // that flips the value of alternateColor
  alternateColor() {
    this.changeColor = !this.changeColor;
  }
}
