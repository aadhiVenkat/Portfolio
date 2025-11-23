import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormControl, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ContactFormData } from '../models/contact.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  
  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    companyName: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  isSubmitting = false;
  submitError: string | null = null;
  submitSuccess = false;

  get email(): FormControl {
    return this.contactForm.get('email') as FormControl;
  }

  get companyName(): FormControl {
    return this.contactForm.get('companyName') as FormControl;
  }

  get message(): FormControl {
    return this.contactForm.get('message') as FormControl;
  }

  get isFormValid(): boolean {
    return this.contactForm.valid && !this.isSubmitting;
  }

  ngOnInit(): void {
    merge(
      this.email.valueChanges,
      this.companyName.valueChanges,
      this.message.valueChanges
    ).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.submitError = null;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getErrorMessage(control: FormControl): string {
    if (control.hasError('required')) {
      return 'This field is required';
    }
    if (control.hasError('email')) {
      return 'Please enter a valid email address';
    }
    if (control.hasError('minlength')) {
      return `Minimum length is ${control.errors?.['minlength'].requiredLength} characters`;
    }
    return '';
  }

  async submit(): Promise<void> {
    if (!this.contactForm.valid || this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;
    this.submitError = null;
    this.submitSuccess = false;

    try {
      const formData: ContactFormData = {
        email: this.email.value || '',
        companyName: this.companyName.value || '',
        message: this.message.value || ''
      };

      const url = 'https://script.google.com/macros/s/AKfycbyhbSqnm-e-tsM2gtVQd3cp29SUosjFFODzbbAazKRhRmz_xCzWIgmxKbnPvW9Z7BxaOQ/exec';
      
      const formDataToSend = new FormData();
      formDataToSend.append('email', formData.email);
      formDataToSend.append('companyName', formData.companyName);
      formDataToSend.append('message', formData.message);
      
      const response = await fetch(url, {
        method: 'POST',
        body: formDataToSend
      });

      if (!response.ok) {
        throw new Error(`Submission failed: ${response.statusText}`);
      }

      this.contactForm.reset();
      this.submitSuccess = true;
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);

    } catch (error) {
      this.submitError = error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.';
      console.error('Contact form submission error:', error);
    } finally {
      this.isSubmitting = false;
    }
  }
}
