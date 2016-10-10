import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `
    <h1>Inline Template</h1>
    {{ title }}
    <fa-other></fa-other>
    <hr>
    <fa-other2></fa-other2>
    <fa-other2></fa-other2>
`,
  styleUrls: [`
    h1 {
      color: red;
      text-decoration: underline;
    }
`]
})
export class AppComponent {
  title = 'My first super-puper app works!';
}
