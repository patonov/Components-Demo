import { Component } from '@angular/core';
import { HighLightDirective } from '../directives/highlight.directive';
import { RouterLink } from '@angular/router';
import { MyRouterLinkDirective } from "../directives/my-router-link.directive";
import { CommonModule, NgClass, NgStyle } from "@angular/common";
import { MyStructuralDirective } from '../directives/my-structural.directive';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HighLightDirective,
    //RouterLink, 
    MyRouterLinkDirective,
    CommonModule,
    NgStyle,
    NgClass,
    MyStructuralDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    randomPercentage = Math.floor(Math.random() * 100);
    widthInPercent = `${this.randomPercentage}%`;

    isPercentageAbove50 = this.randomPercentage >= 50;

    isShown = true;

    toggleIsShown() {
      this.isShown = !this.isShown;
    }
}
