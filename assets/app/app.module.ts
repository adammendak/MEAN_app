import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { AuthService } from "./auth/auth.service";
import { ErrorComponent } from "./error/error.component";
import { ErrorService } from "./error/error.service";
import { MessagesModule } from "./messages/messages.module";
import { AuthModule } from "./auth/auth.module";

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        MessagesModule,
        AuthModule
    ],
    providers: [
        AuthService,
        ErrorService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}