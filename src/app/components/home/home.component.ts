import { Component, OnInit, OnDestroy } from '@angular/core';
import { PropertiesService } from 'src/app/services/properties.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private propertiesService: PropertiesService) { }

  properties = [];
  propertiesSubscription: Subscription;

  ngOnInit(): void {
    this.propertiesSubscription = this.propertiesService.propertiesSubject.subscribe(
      (data: any) => {
        this.properties = data;
      }
    );
    this.propertiesService.getProperties();
    this.propertiesService.emitProperties();
  }

  getSoldValue(index) {
    if (this.properties[index].sold) {
      return 'red';
    } else {
      return 'green';
    }
  }
  ngOnDestroy() {
    this.propertiesSubscription.unsubscribe();
  }

  onGoToSingleProperty(index) {

  }
}
