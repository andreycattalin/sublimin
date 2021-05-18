import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent implements OnInit {

  constructor(private r: Router) { }

  ngOnInit() {
  }

  goDetail(num: string) {
    this.r.navigate(["/empleo/" + num])
  }

}
