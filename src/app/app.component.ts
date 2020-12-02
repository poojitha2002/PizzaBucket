import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sdpp';

  foods=[
    {name:'Cheese n corn',image:'\assets\pizzas\cheese n corn.jpg',link:'/f1'},
    {name:'Deluxe Veggie',image:'\assets\pizzas\Deluxe Veggie.jpg',link:'/f2'},
    {name:'farm house',image:'\assets\pizzas\farm house.jpg',link:'/f3'},
    {name:'Indi Tandoori Paneer',image:'\assets\pizzas\Indi Tandoori Paneer.jpg',link:'/f4'},
    {name:'mexican green wave',image:'\assets\pizzas\mexican green wave.jpg',link:'/f5'},
    {name:'Veg Extravaganza',image:'\assets\pizzas\Veg Extravaganza.jpg',link:'/f6'},
  ];
   
}
