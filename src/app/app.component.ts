import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private formBuilder: FormBuilder) {}

  myForm: FormGroup;

   ngOnInit() {
    this.myForm = this.formBuilder.group({
      totalNumber: [null, [ Validators.required, Validators.min(1), Validators.max(1000000)]],
      totalCurrency: [null, [ Validators.required, Validators.min(1), Validators.max(1000000)]],
    });
    this.onChange();
  }

  onSubmit() {

  }

  onChange() {
    this.myForm.valueChanges.subscribe(() => {
      console.log('onChange this.myForm.value: ', this.myForm.value);
    });
  }

  getTotalNumber() {
    const volume = this.myForm.get('totalNumber').value;
    if (volume === '-'){
      return 0;
    }
    return volume;
  }

  getTotalCurrency() {
    const value = this.myForm.get('totalCurrency').value;
    if (value == '-') {
      return 0;
    }
    return value;
  }


}
