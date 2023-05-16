import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { collection, getDocs } from 'firebase/firestore';
import { db } from 'src/environments/environment';
import { City} from '../models/city.model';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  cities: City[]

  constructor(private menu: MenuController, public authService: AuthService, public router: Router) {

    getDocs(collection(db, 'cities')).then((snapshot) => {
      const allCities = [];
      snapshot.docs.forEach((doc) => {
        console.log('bonjour');
        console.log(doc.data()); //
        allCities.push(doc.data());
      });
      this.cities = allCities;
    })
  }

  moreDetails(city: City): void {
    this.router.navigate(['/details', city]);
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}