
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
//import Validation from './utils/validation';
import { RestserviceService } from '../shared/restservice.service';
@Component({
  selector: 'app-drivewithus',
  templateUrl: './drivewithus.component.html',
  styleUrls: ['./drivewithus.component.scss']
})
export class DrivewithusComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private restApi:RestserviceService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        ownerName: ['', Validators.required],
        address: ['', [Validators.required]],
        ownerPhone: ['', Validators.required],
        cabNumber: ['', Validators.required],
        driverName: ['', [Validators.required]],
        driverPhone: ['', Validators.required],
        refral:['',Validators.required],
        dlNumber: ['', Validators.required],
        isFastTag: [false],
        isPUC: [false],
        isInsur: [false],
        insuranceNumber: ['',Validators.required],
      }
    );
    this.getcheckapi();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
getcheckapi(){
  debugger;
this.restApi.getCabList().subscribe(res=>{
  debugger
  var d=res;

})
}
  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
      this.restApi.addCabDetails(this.form.value).subscribe(res =>{
        alert(res.toString());
      })
    
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}

