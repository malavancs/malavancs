import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {


  @Input() name = '';
  @Input() description = '';
  @Input() link = '';
  @Input() imageSource = '';
  constructor() { }

  ngOnInit(): void {
  }

}
