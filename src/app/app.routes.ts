import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LazyComponent } from './lazy/lazy.component';
// import { WrapperComponent } from './wrapper/wrapper.component';
// import { UsersListComponent } from './users-list.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    // { path: "", redirectTo: "/home", pathMatch: "full" },
    // { path: 'home', component: HomeComponent },
    // { path: 'about', component: WrapperComponent },
    // { path: 'contacts', component: UsersListComponent},
    // { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent }

    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'lazy',
        loadChildren: ()=> import('./lazy/lazy.component').then(c => c.LazyComponent),
    }

];
