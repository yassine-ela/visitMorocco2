import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { addDoc, collection } from 'firebase/firestore';
import { db } from 'src/environments/environment';

import { City } from '../models/city.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  city: any
  constructor(private route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.city = this.route.snapshot.params
  }

  register(city: City): void {
    this.router.navigate(['/successful-register', city]);
    let userId = JSON.parse(localStorage.getItem('user')!).uid;
    addDoc(collection(db, "subscriptions"), {
      city,
      userId
    })
  }
}
