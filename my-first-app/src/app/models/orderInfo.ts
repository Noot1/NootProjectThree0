export class OrderInfo {
  id?: number;
  fullName: string;
  totalPrice: number;
  ccNum: number;

  constructor() {
    this.id = 0;
    this.fullName = '';
    this.totalPrice = 0;
    this.ccNum = 0;
  }
}
