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
}
