import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { MaxLengthDirective } from '../directives/max-length.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MaxLengthDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('loginForm') form: NgForm | undefined;

  formSubmitHandler(){
    console.log('Form is submitted.');
    console.log(this.form);
    this.form?.reset();
  }

  passWordMaxLength = 4;
}
