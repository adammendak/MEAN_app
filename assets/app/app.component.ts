import { Component } from '@angular/core';
import {Message} from './messages/message.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: []
})
export class AppComponent {
    messages: Message[] = [new Message('Some Text', 'Adam'),
                           new Message('second one', 'Adam')];
    
}