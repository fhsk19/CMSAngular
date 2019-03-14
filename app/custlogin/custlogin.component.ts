import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custlogin',
  templateUrl: './custlogin.component.html',
  styleUrls: ['./custlogin.component.css'],

  providers: [CustomerService]
})

export class CustloginComponent implements OnInit {
  loginForm: FormGroup;
  stdlogin: Customer;
  loaded: boolean = false;
  errorMsg: string;

  constructor(private router: Router, private formBuilder: FormBuilder, private ls: CustomerService) { }
  myCustomer: Customer;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      cUserName: ['', Validators.required],
      cPassword: ['', [Validators.required, Validators.minLength(5)]]
    });

  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
  let custlogin: Customer;
  custlogin = this.loginForm.value;
  this.ls.verifyNamePassword(custlogin.cUserName, custlogin.cPassword).subscribe(
    data => {
      this.loaded = true;
      this.myCustomer = data;
      console.log( 'MY CUSTOMER ' + this.myCustomer.cUserName);
      console.log( 'cId:' + this.myCustomer.cid);
      localStorage.setItem('cId', this.myCustomer.cid + '');
      localStorage.setItem('cName', this.myCustomer.cname + '');
      localStorage.setItem('cUserName', this.myCustomer.cUserName + '');
      console.log('username: ', this.myCustomer.cUserName + '');
      alert('Welcome ' + this.myCustomer.cname);
      this.router.navigate(['/custdashboard', this.myCustomer.cid]);
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
