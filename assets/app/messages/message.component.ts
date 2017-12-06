import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Message} from "./message.model";

@Component({
    selector: 'app-message',
    template: './message.component.html',
    styles: []
})
export class MessageComponent {
    @Input() message: Message;
    @Output() editClicked = new EventEmitter<string>();

    onEdit() {
        alert('for now it works like this')
        this.editClicked.emit('A new value');
    }
}
