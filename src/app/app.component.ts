import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar.component';
import { FooterComponent } from "./footer.component";
import { UsersListComponent } from './users-list.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { CommonModule, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            CommonModule,
            //LowerCasePipe,
            //UpperCasePipe,
            // NavBarComponent 
            FooterComponent, 
            UsersListComponent,
            WrapperComponent,
            NavigationBarComponent,
            HomeComponent
          ],
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

  user = { name: 'Petko', age: 23, grades: [3, 2, 3, 3, 4, 2] };

  addProperty(){
    (this.user as any).aaa = 'test 1 2 3';
    this.user.grades.push(-4);
    this.user.grades = [...this.user.grades, -5];
  }

  time$ = interval(1000).pipe(map(() => new Date()));
}
