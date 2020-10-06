import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  a = 0.122;
  b = 500;
  name1 = 'ali ashabe khayat baheri';
  name2 = 'reza'
  d = new Date(10, 12, 17);
  collection: string[] = ['a' , 'b' , 'c' , 'd']

  coffee = {
    name: 'coffee',
    condition: 'good'
  }

  username = new Promise((resolve , rejects) =>{
    setTimeout(() => {
      return resolve('mohammad');
    }, 5000);
  });

  grocery = [
    {
      name: 'milk',
      condition: 'expired'
    },
    {
      name: 'cheese',
      condition: 'good'
    },
    {
      name: 'cheese',
      condition: 'expired'
    },
    {
      name: 'juice',
      condition: 'good'
    },
    {
      name: 'jam',
      condition: 'expired'
    }
  ];
  filterString = '';

  addCoffee(){
    this.grocery.push(this.coffee)
  }
}
