import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

   angForm: FormGroup;
   submitted = false;

   constructor(private fb: FormBuilder) {
    this.createForm();
  }
   createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       email: ['', Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')],
       phone: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    console.warn(this.angForm.value);
    // stop here if form is invalid
    if (this.angForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)');
}
  get userName() {
    return this.angForm.get('name');
}
get userEmail() {
  return this.angForm.get('email');
}


  ngOnInit() {
  }

}
