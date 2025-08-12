import { Component } from "@angular/core";

@Component({
    selector: 'app-nav-bar',
    template: `<div class="nav-bar">
        <div>{{ title }}</div>
        <div class="nav-btn">Home</div>
        <div class="nav-btn">About</div>
        <div class="nav-btn">Contacts</div>
    </div>`,
    styles: `.nav-bar {
        width: 100%;
        height: 30px;
        padding: 10px;
        background-color: skyblue;
        color: #000;
        display: flex;

        .nav-btn {
            padding: 10px;
            border: 2px solid #000;
        }

        .nav-btn: hover {
            cursor: pointer;
            background-color: #04AA6D;
            color: white;
        }
    }`,
    standalone: true,
})
export class NavBarComponent{
    title: string = 'My Navigation Bar Component';
}
