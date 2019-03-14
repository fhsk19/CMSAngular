export class Orders {
  public isSelected: boolean;
  constructor( public oid: number,
               public cid: number,
               public foodId: number,
               public qty: number,
               public totalPrice: number,
               public estimatedTime: string,
               public orderTime: string,
               public vid: number,
               public orderDate: string,
               public ostatus: string,
               public ocomment: string
               ) {
               }
}
