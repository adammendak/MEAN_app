import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {MessageComponent} from "./messages/message.component";
import {FormsModule} from "@angular/forms";
import {Message} from "./messages/message.model";
import {MessageListComponent} from "./messages/message-list.component";
import {MessageInputComponent} from "./messages/message-input.component";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent
    ],
    imports: [BrowserModule,
    FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {
    message = new Message("A message", "Adam");
}