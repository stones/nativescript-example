import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "details",
    moduleId: module.id,
    styleUrls: ["./details.common.css"],
    templateUrl: "./details.component.html",
})

export class DetailsComponent implements OnInit {

    constructor(private router:Router){

    }

    ngOnInit(): void {
    }

    logout(){
       this.router.navigate(["/login"])
    }
}
