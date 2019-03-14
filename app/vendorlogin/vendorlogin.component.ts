import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor';
import { AlertPromise } from 'selenium-webdriver';
import { Router } from '@angular/router';

@Component({
selector: 'app-vendorlogin',
templateUrl: './vendorlogin.component.html',
styleUrls: ['./vendorlogin.component.css'],

providers: [VendorService]
})

export class VendorloginComponent implements OnInit {
loginForm: FormGroup;
submitted = false;
stdlogin: Vendor;
constructor(private router: Router, private formBuilder: FormBuilder,
            private ls: VendorService) { }

ngOnInit() {
this.loginForm = this.formBuilder.group({
vuserName: ['', Validators.required],
vpassword: ['', [Validators.required, Validators.minLength(5)]]
});
}

get f() { return this.loginForm.controls; }
errorMsg: string;
myVendor: Vendor;
loaded: boolean = false;

onSubmit() {
let vendorlogin: Vendor;
vendorlogin = this.loginForm.value;
this.ls.validateLogin(vendorlogin.vuserName, vendorlogin.vpassword).subscribe(
data => {
this.loaded = true;
this.myVendor = data;
console.log( 'MY VENDOR ' + this.myVendor.vuserName);
console.log( 'vId:' + this.myVendor.vid);
localStorage.setItem('vId', this.myVendor.vid + '');
localStorage.setItem('vName', this.myVendor.vname + '');
localStorage.setItem('vUserName', this.myVendor.vuserName + '');
localStorage.setItem('vPhone', this.myVendor.vphone + '');
console.log(this.myVendor.vphone);
alert('Welcome ' + this.myVendor.vuserName );
this.router.navigate(['/vendordashboard', this.myVendor.vid]);
},

error => {
this.errorMsg = error;
console.log(this.errorMsg);
alert('Enter valid credentials!');
this.router.navigate(['/home']);
}
);
}
}
