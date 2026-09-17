import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  NavController,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  person,
  bagHandleOutline,
  headsetOutline,
  heartOutline,
  walletOutline,
  locationOutline,
  cardOutline,
  notificationsOutline,
  informationCircleOutline,
  chevronForwardOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonButton,
    IonIcon,
  ],
})
export class ProfilePage implements OnInit {
  userName: string = 'Zepto Shopper';
  phoneNumber: string = '';
  walletBalance: number = 50.0;

  constructor(private navCtrl: NavController) {
    addIcons({
      person,
      bagHandleOutline,
      headsetOutline,
      heartOutline,
      walletOutline,
      locationOutline,
      cardOutline,
      notificationsOutline,
      informationCircleOutline,
      chevronForwardOutline,
    });
  }

  ngOnInit() {
    this.phoneNumber = localStorage.getItem('userPhone') || '';
  }

  goToOrders() {
    // Navigate or alert
    alert('Navigating to Your Orders');
  }

  goToHelp() {
    alert('Connecting to 24x7 Help & Support');
  }

  goToWishlist() {
    alert('Opening Your Wishlist');
  }

  addBalance() {
    this.walletBalance += 100;
  }

  openAddresses() {
    alert('Manage Saved Addresses');
  }

  openPayments() {
    alert('Manage Payment Methods & UPI');
  }

  openNotifications() {
    alert('Notification Settings');
  }

  openAbout() {
    alert('Zepto v1.0.0');
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userPhone');
    this.navCtrl.navigateRoot('/intro');
  }
}