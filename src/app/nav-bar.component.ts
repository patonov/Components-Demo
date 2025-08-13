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
        height: 46px;
        background-color: skyblue;
        color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px 32px;
        text-align: center;
        font-size: 16px;
        margin: 4px;
        }

        .nav-btn {
            padding: 10px 10px 10px 10px;
            border: 2px solid #000;
            padding: 16px 32px;
            text-align: center;
            margin: 4px;
        }

        .nav-btn:hover {
            cursor: pointer;
            background-color: #04AA6D;
            color: white;
        }`,
    standalone: true,
})
export class NavBarComponent{
    title: string = 'My Navigation Bar Component';
}
