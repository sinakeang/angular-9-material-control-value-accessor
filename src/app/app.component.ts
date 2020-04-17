import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private formBuilder: FormBuilder) {}

  myForm = this.formBuilder.group({
    deposit: ['', [
      Validators.required, 
      Validators.min(1),
      Validators.max(1000000)
    ]],
  });

  onSubmit() {

  }


}
