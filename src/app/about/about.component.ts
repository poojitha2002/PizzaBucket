import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <p class="hi">
      about works!
    </p>
  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
