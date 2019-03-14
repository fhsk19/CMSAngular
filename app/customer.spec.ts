
import { Customer } from './customer';

describe('Customer', () => {
  it('should create an instance', () => {
    expect(new Customer(1,'sivaram',1139.64,'siva','pass001')).toBeTruthy();
  });
});
 
