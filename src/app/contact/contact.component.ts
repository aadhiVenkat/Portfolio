import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { merge } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatCardModule , MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  
  email = new FormControl('', [Validators.required, Validators.email]);
  companyName = new FormControl('', [Validators.required]);
  message = new FormControl('', [Validators.required]);
  disbaleSubmit:boolean = true;

  ngOnInit() {
    merge(
      this.email.valueChanges,
      this.companyName.valueChanges,
      this.message.valueChanges,
      ).subscribe(()=>{
        this.disbaleSubmit = !(this.email.valid && this.companyName.valid && this.message.valid);
    })
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  submit(){
    const formData = new FormData();
    const email_value:string = this.email.value ? this.email.value : "";
    const companyName_value:string = this.companyName.value ? this.companyName.value : "";
    const message_value:string = this.message.value ? this.message.value : "";
    formData.append("email",email_value);
    formData.append("companyName",companyName_value);
    formData.append("message",message_value);
    // fetch("https://getform.io/f/zaxmdegb", {
    //     method: "POST",
    //     body: formData,
    //     headers: {
    //         "Accept": "application/json",
    //     },
    // })
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error(`An error occurred: ${response.statusText}`);
    //     }else{
    //       this.email.reset();
    //       this.companyName.reset();
    //       this.message.reset();
    //     }
    //     console.log(response);
    // })
    // .catch(error => {
    //     console.log(error);
    // });

    const url = "https://script.google.com/macros/s/AKfycbyhbSqnm-e-tsM2gtVQd3cp29SUosjFFODzbbAazKRhRmz_xCzWIgmxKbnPvW9Z7BxaOQ/exec"
    fetch(url, {
        method: "POST",
        body: formData,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`An error occurred: ${response.statusText}`);
        }else{
          this.email.reset();
          this.companyName.reset();
          this.message.reset();
        }
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });
  }


}
