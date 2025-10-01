import { Component } from '@angular/core';
import { HighLightDirective } from '../directives/highlight.directive';
import { RouterLink } from '@angular/router';
import { MyRouterLinkDirective } from "../directives/my-router-link.directive";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HighLightDirective, 
    //RouterLink, 
    MyRouterLinkDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
