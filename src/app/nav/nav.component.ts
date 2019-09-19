import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrls: [ 'nav.component.css' ]
})

export class NavComponent implements OnInit{

  constructor(private router : Router) {

  }

  ngOnInit(): void {
    let location = this.router.url;
    location = location.charAt(1).toUpperCase() +  location.substring(2, location.length);
    console.log(location);
    //Previous Work handle
    if (location == "Previouswork") {
      location = location.substring(0, location.indexOf("s") + 1) + " " +
        location.charAt(location.indexOf("w")).toUpperCase() +
        location.substring(location.indexOf("s") + 2, location.length);
    }
    if (location == "") {
      location = "Luke Petzer";
    }
    document.getElementById("title").innerText = location;
  }
}
