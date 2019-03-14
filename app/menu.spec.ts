 import { Menu } from './menu';

describe('Menu', () => {
  it('should create an instance', () => {
    expect(new Menu(1001, 500, 'VEGRICE', 50.59, 'VEG', 'SPICY')).toBeTruthy();
  });
});
 
