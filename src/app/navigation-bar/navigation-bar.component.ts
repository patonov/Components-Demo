import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar.component';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {

}
