import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import {User} from "../user/user";
import {Config} from "../config";

@Injectable()
export default class AuthenticationService {
    constructor(private http: Http) {
    }

    login(user: User) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let credentials = {
            username: user.email,
            password: user.password,
            grant_type: "password"
        };
        return this.http.post(
            Config.apiUrl + "oauth/token",
            JSON.stringify(credentials),
            {headers: headers}
        )
            .map(response => response.json())
            .do(data => {
                Config.token = data.Result.access_token;
            })
            .catch(this.handleErrors);
    }

    /*    logout(user: User) {
     let headers = new Headers();
     headers.append("Content-Type", "application/json");

     return this.http.post(
     Config.apiUrl + "oauth/token",
     JSON.stringify({
     username: user.email,
     password: user.password,
     grant_type: "password"
     }),
     {headers: headers}
     )
     .map(response => response.json())
     .do(data => {
     Config.token = data.Result.access_token;
     })
     .catch(this.handleErrors);
     }*/


    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}