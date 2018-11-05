import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAKMTkoHRFq9QMhRm1PBGRtpGyjiDXkM4Q',
      authDomain: 'ng-recipe-book-78ecb.firebaseapp.com',
    });
  }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
