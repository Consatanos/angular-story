import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PlusIconComponent } from "./icons/ui/plus/plus-icon.component";
import { UiLinksComponent } from './storybook/ui-links/ui-links.component';

@NgModule({
    declarations: [
        AppComponent,
        PlusIconComponent,
        UiLinksComponent
    ],
    imports: [BrowserModule, AppRoutingModule], // Так у тебя не включена сборка чтоли?
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
