import {NgModule} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {Routes} from "@angular/router";

import {FingerprintComponent} from "./pages/fingerprint/fingerprint.component";
import {LoginComponent} from "./pages/login/login.component";
import {DetailsComponent} from "./pages/details/details.component";

const routes: Routes = [
    {path: "", redirectTo: "/fingerprint", pathMatch: "full"},
    {path: "fingerprint", component: FingerprintComponent},
    {path: "login", component: LoginComponent},
    {path: "details", component: DetailsComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})

export class AppRoutingModule {
}