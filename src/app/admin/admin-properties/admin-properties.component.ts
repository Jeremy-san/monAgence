import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['./admin-properties.component.scss']
})
export class AdminPropertiesComponent implements OnInit {

  propertiesForm: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initPorpertiesForm();
  }

  initPorpertiesForm() {
    this.propertiesForm = this.fb.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      surface: ['', Validators.required],
      rooms: ['', Validators.required],
      description: '',
      price: ['', Validators.required]
    });
  }

  onSubmitPropertiesForm() {
    console.log(this.propertiesForm.value);

  }
}
