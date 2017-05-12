import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {NativeScriptFormsModule} from "nativescript-angular/forms";
import {NativeScriptHttpModule} from "nativescript-angular/http";


import {AppRoutingModule} from "./app.routing";
import {AppComponent} from "./app.component";

import {FingerprintComponent} from "./pages/fingerprint/fingerprint.component";
import {LoginComponent} from "./pages/login/login.component";
import {DetailsComponent} from "./pages/details/details.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DetailsComponent,
        FingerprintComponent,
        LoginComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {
}
