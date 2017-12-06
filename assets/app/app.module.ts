import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {MessageComponent} from "./messages/message.component";
import {FormsModule} from "@angular/forms";
import {Message} from "./messages/message.model";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent
    ],
    imports: [BrowserModule,
    FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {
    message = new Message("A message", "Adam");
}