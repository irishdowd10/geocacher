import { Component, OnInit } from '@angular/core';
import { GeocacherApiService } from '../geocacher-api.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-geocacher-form',
  templateUrl: './geocacher-form.component.html',
  styleUrls: ['./geocacher-form.component.css']
})
export class GeocacherFormComponent implements OnInit {
  latLngObject: any;
  addressObject: any;
  constructor(private apiService: GeocacherApiService) { }

  ngOnInit() {
  }

  getGeocacherLongLat(address: string) {
    // { results: [results]}
    this.apiService.getLonLatByAddress(address).subscribe(resp => {
      let firstResult = resp.results[0].geometry;
      this.latLngObject = firstResult.location;
      // console.log('LAT: ' + firstResult.location.lat);
      // console.log('LNG: ' + firstResult.location.lng);
    });
  }

  getGeocacherAddress(lat: string, lng: string) {
    this.apiService.getAddressByLatLng(lat, lng).subscribe(resp => {
      this.addressObject = resp.results[0];
    });
  }

}
