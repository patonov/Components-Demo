import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar.component';
import { FooterComponent } from "./footer.component";
import { UsersListComponent } from './users-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FooterComponent, UsersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Components-Demo';

  numbers = [ 1, 2, 3, 4, 5 ];

  siteUsers = [
        { name: 'Pesho', age: 22 },
        { name: 'Ivan', age: 29 },
        { name: 'Mitko', age: 32 },
        { name: 'Umar', age: 38 },
    ];

  handleClick(){
    this.title = 'Здравей, брато!';
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement){
    const newCommer = { name: inputName.value, age: Number(inputAge.value) };
    this.siteUsers.push(newCommer);
  }

  counter = signal(0);

  ngOnInit(): void {
    console.log(`Counter: ${this.counter()}`);
  }

  increment(){
    const value = this.counter() + 1;

    this.counter.set(value);
  }  
}
