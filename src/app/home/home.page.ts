import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonSearchbar,
  NavController,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  chevronDownOutline,
  personCircleOutline,
  searchOutline,
  basketOutline,
  fastFoodOutline,
  cafeOutline,
  medkitOutline,
  walletOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonContent,
    IonButtons,
    IonButton,
    IonIcon,
    IonSearchbar,
  ],
})
export class HomePage {
  categories = [
    { title: 'Grocery', icon: 'basket-outline', bg: '#eef9f2' },
    { title: 'Snacks', icon: 'fast-food-outline', bg: '#fef5ea' },
    { title: 'Dairy & Cafe', icon: 'cafe-outline', bg: '#f5f0fa' },
    { title: 'Pharma', icon: 'medkit-outline', bg: '#feeff2' },
  ];

  constructor(private navCtrl: NavController) {
    addIcons({
      chevronDownOutline,
      personCircleOutline,
      searchOutline,
      basketOutline,
      fastFoodOutline,
      cafeOutline,
      medkitOutline,
      walletOutline,
    });
  }

  goToProfile() {
    this.navCtrl.navigateForward('/profile');
  }

  openWallet() {
    // You can redirect to wallet or show balance modal
    alert('Zepto Cash Balance: ₹50');
  }
}