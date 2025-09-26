import { Component } from '@angular/core';
import { HighLightDirective } from '../directives/highlight.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HighLightDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
