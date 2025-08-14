import { Component, Directive } from "@angular/core";


@Component({
    selector: 'app-users-list',
    standalone: true,
    template: `<div id="wraper">
        <h3>My user list is as follow:</h3>
        <ul>
            @for (user of users; track $index) {
                <li>{{ user.name }} - {{ user.age }}</li>
            }
        </ul>
        <div>`,
    styles: `#wraper {
        border: 2px solid #111;
    }`
})
export class UsersListComponent {
    users = [
        { name: 'Pesho', age: 22 },
        { name: 'Ivan', age: 29 },
        { name: 'Mitko', age: 32 },
        { name: 'Umar', age: 38 },
    ];
}