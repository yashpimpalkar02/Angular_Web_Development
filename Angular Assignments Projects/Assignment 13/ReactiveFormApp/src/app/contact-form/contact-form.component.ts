import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: false,
  
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
      city: ['', [Validators.required, Validators.minLength(4)]],
      state: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      comments: ['', [Validators.required, Validators.minLength(30)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
    } else {
      console.log('Form Invalid');
    }
  }
}
