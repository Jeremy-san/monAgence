import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Property } from '../interfaces/property';


@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  properties: Property[] = [];

  // emeteur
  propertiesSubject = new Subject<Property[]>();

  constructor() { }

  emitProperties() {
    this.propertiesSubject.next(this.properties);
  }

  getProperties() {
  //   return new Promise(
  //     (resolve, reject) => {
  //       if (this.properties && this.properties.length > 0) {
  //         resolve(this.properties);
  //       } else {
  //         const error = new Error('Properties does not exist or is empty');
  //         reject(error);
  //       }
  //     }
  //   );
  // }
    // return new Observable((observer) => {
    //   if (this.properties && this.properties.length > 0) {
    //     observer.next(this.properties);
    //     observer.complete();
    //   } else {
    //     const error = new Error('Properties does not exist or is empty');
    //     observer.error(error);
    //   }
    // });
  }

  createPorperties(property: Property) {
    this.properties.push(property);
  }

  deleteProperty(index) {
    this.properties.splice(index, 1);
    this.emitProperties();
  }

  updateProperty(property: Property , index) {
    this.properties[index] = property;
    this.emitProperties();
  }
}
