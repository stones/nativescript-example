import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {AppRoutingModule} from "./app.routing";
import {AppComponent} from "./app.component";

import {LoginComponent} from "./pages/login/login.component";
import {DetailsComponent} from "./pages/details/details.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DetailsComponent,
        LoginComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {
}
