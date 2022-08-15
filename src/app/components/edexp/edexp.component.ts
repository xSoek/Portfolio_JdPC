import { Component, OnInit } from '@angular/core';
import { EXPERIENCE } from './experience';

@Component({
  selector: 'app-edexp',
  templateUrl: './edexp.component.html',
  styleUrls: ['./edexp.component.css']
})
export class EdexpComponent implements OnInit {

  experience: any[] = [...EXPERIENCE]
  currentExp: any;
  constructor() { }

  ngOnInit(): void {

  }


  activateMarker(e: any) {
    let markers = document.querySelectorAll('span.marker');
    markers.forEach(marker => marker.classList.remove("active-marker"))
    e.target.classList.toggle("active-marker");
    let selectedMarkerIndex = e.target.getAttribute("id").split("marker-")[1]
    this.currentExp = this.experience[selectedMarkerIndex]
  }
}