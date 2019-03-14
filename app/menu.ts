export class Menu {

  public qty: number;
  public tPrice: number;
  public isSelected: boolean = false;
  constructor( public foodId: number,
               public vId: number,
               public foodName: string,
               public price: number,
               public foodCategory: string,
               public foodDescription: string
                ) {
  }
}
