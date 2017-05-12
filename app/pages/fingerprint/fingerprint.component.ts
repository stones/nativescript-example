import {Component, OnInit} from "@angular/core";
import {FingerprintAuth} from "nativescript-fingerprint-auth";
import {Router} from "@angular/router";
import {SecureStorage} from "nativescript-secure-storage";

@Component({
    selector: "fingerprint",
    moduleId: module.id,
    templateUrl: "./fingerprint.component.html",
})

export class FingerprintComponent implements OnInit {
    fingerprintAuth: FingerprintAuth;
    secureStorage: SecureStorage;

    constructor(private router: Router) {
        this.secureStorage = new SecureStorage();
        this.fingerprintAuth = new FingerprintAuth();
    }

    ngOnInit(): void {
        this.showFingerprintPrompt();
    }

    public showFingerprintPrompt() {
        //If there is no token, then don't bother showing the fingerprint scanner as we need the token.
        //Otherwise, check that we can use fingerprint auth.
        this.secureStorage.get({
            key: "oauth_token"
        }).then((value) => {
            if (value === null)  return this.goToLogin();
            this.fingerprintAuth.available()
                .then((avail: boolean) => avail ? this.fingerprintAuthentication() : this.router.navigate(["/login"]));
        });
    }

    public goToLogin(): void {
        this.router.navigate(["/login"]);
    }

    public goToDetails(): void {
        this.router.navigate(["/details"]);
    }

    public doCheckFingerprintsChanged(): void {
        this.fingerprintAuth.didFingerprintDatabaseChange().then(
            (changed: boolean) => {
                alert({
                    title: "Fingerprint DB changed?",
                    message: changed ? "YES" : "NO",
                    okButtonText: "OK"
                });
            }
        );
    }

    public fingerprintAuthentication(): void {
        const options = {
            message: 'Scan finger', // optional
            fallbackMessage: 'Enter PIN' // optional
        };
        this.fingerprintAuth.verifyFingerprintWithCustomFallback(options).then(
            () => this.goToDetails(),
            (error) => this.goToLogin()
        );
    }
}
