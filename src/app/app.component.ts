import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="object">
        <div class="subObject">
          <h1>
           {{title}} 
          </h1>
          <h4>Enterprise Hello World</h4>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .container, .object {
        display: flex;
        background-color: #f5f0df;
      }

      .container {
        height:98vh;
        justify-content: center;
      }

      .object {
        align-items: center;
      }

      .subObject {
        text-align: center;
      }

      h1 {
        font-size: 5em;
        text-decoration: underline;
      }

      h1, h4 {
        margin: 0;
      }
    `
  ]
})
export class AppComponent {
  title = 'EHW';
}
