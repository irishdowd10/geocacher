import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { apiUrl, apiKey } from './api-keys';
import 'rxjs/add/operator/map';


@Injectable()
export class GeocacherApiService {
  constructor(private http: Http) { }

  getLonLatByAddress(address: string) {
    return this.http.get(apiUrl + "address=" + address + "&key=" + apiKey).map(apiObj => apiObj.json());
  }

  getAddressByLatLng(lat:string, lng: string) {
    let latlng = lat + ', ' + lng;
    return this.http.get(apiUrl + "latlng=" + latlng + "&key=" + apiKey).map(apiObj => apiObj.json());
  }

}
