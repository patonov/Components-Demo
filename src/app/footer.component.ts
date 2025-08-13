import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    template: `<div class="footer">{{ title }}</div>`,
    styles: `.footer {
        width: 100%;
        height: 36px;
        background-color: skyblue;
        color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px;
        text-align: center;
        position: absolute;
        bottom: 0;
        left: 0;
    }`,
    standalone: true,
})
export class FooterComponent{
    title: string = 'My Footer Component';
}