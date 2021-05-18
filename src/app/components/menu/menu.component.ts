import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  hideMenu = true

  constructor(private r: Router) { }

  ngOnInit(): void {
  }

  goHome() {
    this.r.navigate(["/"])
  }

}
