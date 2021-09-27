import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lat: any; 
  long: any;


  constructor(
    private geolocation: Geolocation,
  ) {}

  geoInformation() {
    this.geolocation.getCurrentPosition({ 
      enableHighAccuracy: false}).then((data) => {
      this.lat = data.coords.latitude;
      this.long = data.coords.longitude;
     }).catch((error) => {
       alert(error);
     });
  }

}
