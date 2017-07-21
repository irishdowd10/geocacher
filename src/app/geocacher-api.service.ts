import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { geoKey } from './api-keys';
import 'rxjs/add/operator/map';


@Injectable()
export class GeocacherApiService {
  constructor(private http: Http) { }

  apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json?';

  getLonLatByAddress(address: string) {
    return this.http.get(this.apiUrl + "address=" + address + "&key=" + geoKey).map(apiObj => apiObj.json());
  }

  getAddressByLatLng(lat:string, lng: string) {
    let latlng = lat + ', ' + lng;
    return this.http.get(this.apiUrl + "latlng=" + latlng + "&key=" + geoKey).map(apiObj => apiObj.json());
  }

}
