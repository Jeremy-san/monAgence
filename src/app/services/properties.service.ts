import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  properties = [
    {
      title: 'Ma super Maison',
      category: 'Maison',
      surface: '75',
      sold: true
    },
    {
      title: 'Petit appartement',
      category: 'Appartement',
      sold: false
    },
    {
      title: 'Belle villa',
      category: 'Maison',
      sold: true
    }
  ];

  // emeteur
  propertiesSubject = new Subject<any[]>();

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

  createPorperties(property) {
    this.properties.push(property);
  }

  deleteProperty(index) {
    this.properties.splice(index, 1);
    this.emitProperties();
  }

  updateProperty(property, index) {
    this.properties[index] = property;
    this.emitProperties();
  }
}
