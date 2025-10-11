import { Component } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonImg } from '@ionic/angular/standalone';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoIonic, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonHeader, IonImg, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonIcon],
})
export class Tab3Page {
  constructor() {
    addIcons({ personOutline });
  }
}