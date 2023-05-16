import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-successful-register',
  templateUrl: './successful-register.page.html',
  styleUrls: ['./successful-register.page.scss'],
})
export class SuccessfulRegisterPage implements OnInit {
  city: any
  constructor(public authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.city = this.route.snapshot.params
  }

  currentDate(): string {
    return new Date().toDateString()
  }

}
