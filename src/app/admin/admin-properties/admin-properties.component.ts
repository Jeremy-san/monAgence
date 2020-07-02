import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PropertiesService } from 'src/app/services/properties.service';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';
import { Property } from 'src/app/interfaces/property';

@Component({
  selector: 'app-admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['./admin-properties.component.scss']
})
export class AdminPropertiesComponent implements OnInit {

  propertiesForm: FormGroup;
  propertiesSubcription: Subscription;
  properties: Property[] = [];

  indexToRemove;

  indexToUpdate;
  editMode = false;

  constructor(private fb: FormBuilder, private propertiesService: PropertiesService) { }

  ngOnInit(): void {
    this.initPorpertiesForm();
    this.propertiesService.propertiesSubject.subscribe(
      (data: Property[]) => {
        this.properties = data;
      }
    );
    this.propertiesService.emitProperties();
  }

  // Formulaire
  initPorpertiesForm() {
    this.propertiesForm = this.fb.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      surface: ['', Validators.required],
      rooms: ['', Validators.required],
      description: '',
      price: ['', Validators.required],
      sold: ''
    });
  }

  onSubmitPropertiesForm() {
    const newProperty: Property = this.propertiesForm.value; // on récupère l'interface de property
    if (this.editMode) {
      this.propertiesService.updateProperty(newProperty, this.indexToUpdate);
    } else {
      this.propertiesService.createPorperties(newProperty);
    }
    $('#propertiesFormModal').modal('hide');
  }

  // réinitialiser le formulaire
  resetForm() {
    this.editMode = false;
    this.propertiesForm.reset();
  }

  // Ouvre une modal demandant si on veut bien supprimer le formulaire
  onDeleteProperty(index) {
    $('#deletePropertyModal').modal('show');
    this.indexToRemove = index;
  }

  // confirmation de la suppréssion
  onConfirmDeleteProperty() {
    this.propertiesService.deleteProperty(this.indexToRemove);
    $('#deletePropertyModal').modal('hide');
  }

  // ce qui permet de modifier le formulaire
  onEditProperty(property: Property) {
    this.editMode = true;
    $('#propertiesFormModal').modal('show');
    this.propertiesForm.get('title').setValue(property.title);
    this.propertiesForm.get('category').setValue(property.category);
    this.propertiesForm.get('surface').setValue(property.surface);
    this.propertiesForm.get('rooms').setValue(property.rooms);
    this.propertiesForm.get('description').setValue(property.description);
    this.propertiesForm.get('price').setValue(property.price);
    this.propertiesForm.get('sold').setValue(property.sold);
    const index = this.properties.findIndex(
      (propertyEl) => {
        if (propertyEl === property) {
            return true;
        }
      }
    );
    this.indexToUpdate = index;
  }

}
