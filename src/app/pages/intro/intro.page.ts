import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonButton, NavController } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonButton],
})
export class IntroPage implements OnInit {
  showLogin: boolean = false;
  phoneNumber: string = '';

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private cdr: ChangeDetectorRef,
    private zone: NgZone
  ) {}

  ngOnInit() {
    this.startIntroSequence();
  }

  private startIntroSequence() {
    setTimeout(() => {
      // Run inside Angular's NgZone to guarantee immediate execution & state updates
      this.zone.run(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

        if (isLoggedIn) {
          // NavController works reliably with Ionic's navigation stack
          this.navCtrl.navigateRoot('/home');
        } else {
          this.showLogin = true;
          // Force UI to re-render the bottom sheet immediately
          this.cdr.detectChanges();
        }
      });
    }, 1800);
  }

  handleLogin() {
    if (this.phoneNumber.trim().length === 10) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userPhone', this.phoneNumber);

      this.zone.run(() => {
        this.navCtrl.navigateRoot('/home');
      });
    } else {
      alert('Please enter a valid 10-digit mobile number');
    }
  }
}