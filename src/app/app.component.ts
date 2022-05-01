import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.authState();
  }

  authState() {
    this.authService.afAuth
      .onAuthStateChanged((user: any) => {
        if (user) {
          const getUser = JSON.parse(localStorage.getItem('user') || '{}');
          console.log(getUser.displayName);
        } else {
          localStorage.removeItem('user');
        }
      });
  }
}
