import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import DetailsService from "../../shared/details/details-service";
import Detail from "../../shared/details/detail";

@Component({
    selector: "details",
    moduleId: module.id,
    providers: [DetailsService],
    styleUrls: ["./details.common.css"],
    templateUrl: "./details.component.html",
})

export class DetailsComponent implements OnInit {
    detailList: Array<Detail> = [];

    constructor(private router:Router, detailsService: DetailsService){
        this.detailList = detailsService.get()
    }

    ngOnInit(): void {

    }

    logout(){
       this.router.navigate(["/login"])
    }
}
