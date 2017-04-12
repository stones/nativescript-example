import {Component, OnInit} from "@angular/core";
import {User} from "../../shared/user/user";

import {Router} from "@angular/router";

@Component({
    selector: "login",
    moduleId: module.id,
    styleUrls: ["./login.common.css"],
    templateUrl: "./login.component.html",
})

export class LoginComponent implements OnInit {
    user: User;

    constructor(private router: Router) {
        this.user = new User();
        this.user.email = "tom@tomstones.com.au";
        this.user.password = "password";
    }

    ngOnInit(): void {

    }

    submit(){
        this.router.navigate(["/details"])
    }
}
