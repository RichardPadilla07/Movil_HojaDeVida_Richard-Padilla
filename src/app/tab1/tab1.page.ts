import { Component } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonProgressBar, IonIcon, IonImg, IonButton, IonContent, IonAvatar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonProgressBar, IonIcon, IonImg, IonButton, IonContent, IonAvatar],
})
export class Tab1Page { }