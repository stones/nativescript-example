import {Component, OnInit} from "@angular/core";
import {User} from "../../shared/user/user";
import AuthenticationService from "../../shared/authentication/authentication-service";

import {Page} from "ui/page";

import {Router} from "@angular/router";

@Component({
    selector: "login",
    moduleId: module.id,
    providers: [AuthenticationService],
    styleUrls: ["./login.common.css"],
    templateUrl: "./login.component.html",
})

export class LoginComponent implements OnInit {
    user: User;
    authenticating: boolean;

    constructor(private router: Router, private authService: AuthenticationService, private page: Page) {
        this.user = new User();
        this.user.email = "tom@tomstones.com.au";
        this.user.password = "password";
        page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.authenticating = false;
    }

    submit() {
        this.authenticating = true;
        this.authService.login(this.user)
            .subscribe(
                () => {
                    this.router.navigate(["/details"]);
                },
                (error) => {
                    this.authenticating = false;
                    alert("I don't know who that is.")
                }
            );
    }
}
