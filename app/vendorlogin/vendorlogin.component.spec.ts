import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms'; // needed
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { VendorloginComponent } from './vendorlogin.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
 

describe('VendorloginComponent', () => {
let component: VendorloginComponent;
let fixture: ComponentFixture<VendorloginComponent>;
let de: DebugElement;
let el: HTMLElement;

beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [VendorloginComponent ],
imports: [ReactiveFormsModule,HttpClientModule],
providers: [
{provide: Router, useClass: MockRouter},
{provide: ActivatedRoute, 
useValue:
{
}
} //mockActiveRouter}
]
})
.compileComponents();
}));
class MockRouter {}
class MockActiveRouter {
}
beforeEach(() => {
fixture = TestBed.createComponent(VendorloginComponent);
component = fixture.componentInstance;
de = fixture.debugElement.query(By.css('form'));
el = de.nativeElement;
fixture.detectChanges();
});


xit('should call the OnSubmit method when submit button is clicked ', async() => {
fixture.detectChanges();
spyOn(component, 'onSubmit');
el = fixture.debugElement.query ( By.css('button')).nativeElement;
el.click();
expect(component.onSubmit).toHaveBeenCalledTimes(1);
});
it('form should be invalid ', async() => {
component.loginForm.controls['vuserName'].setValue('');
component.loginForm.controls['vpassword'].setValue('');
expect(component.loginForm.valid).toBeFalsy();
});
it('form should be valid ', async() => {
component.loginForm.controls['vuserName'].setValue('SURESH');
component.loginForm.controls['vpassword'].setValue('VENDR500');
expect(component.loginForm.valid).toBeTruthy();
});
});