import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css'
})
export class WrapperComponent {
  counter = signal(0);

  doubleCounter = computed(()=> this.counter() * 2);

  increment(){
    const value = this.counter() + 1;
    this.counter.set(value);
  }

}
