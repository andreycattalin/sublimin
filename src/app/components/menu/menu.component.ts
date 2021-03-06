import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @ViewChild('closeModal') closeModal: any;

  hideMenu = true

  constructor(private r: Router) { }

  ngOnInit(): void {
  }

  goHome() {
    this.r.navigate(["/"])
  }

  goRegister() {
    this.closeModal.nativeElement.click();
    this.r.navigate(["/registro"])
  }

}
