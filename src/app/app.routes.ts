import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { UsersListComponent } from './users-list.component';

export const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: WrapperComponent },
    { path: 'contacts', component: UsersListComponent}
];
