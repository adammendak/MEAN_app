import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: []
})
export class AppComponent {
    message = {
        content: 'A message',
        author: 'Adam'
    }
    
}