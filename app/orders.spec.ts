import { Orders } from './orders';

describe('Orders', () => {
  it('should create an instance', () => {
    expect(new Orders(313,1,1003,3,90,'16:13:56','16:13:56',501,'2019-03-13','PLACED',null)).toBeTruthy();
  });
});
 
