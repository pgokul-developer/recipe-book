import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  onFeatureClicked(feature: string)
  {
    this.featureSelected.emit(feature);
  }

  ngOnInit() {
  }

}
