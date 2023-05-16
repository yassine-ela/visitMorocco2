import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from 'src/environments/environment';

import { City } from '../models/city.model';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.page.html',
  styleUrls: ['./subscriptions.page.scss'],
})
export class SubscriptionsPage implements OnInit {

  cities: City[]

  constructor() {
    let userId = JSON.parse(localStorage.getItem('user')!).uid;
    console.log(userId)
    getDocs(query(collection(db, 'subscriptions'), where("userId", "==", userId))).then((snapshot) => {
      const allCities = [];
      snapshot.docs.forEach((doc) => {
        allCities.push(doc.data().city);
      });
      this.cities = allCities;
    })
  }

  ngOnInit() {
  }

}
