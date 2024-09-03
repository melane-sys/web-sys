import { v4 as uuidv4 } from 'uuid';

export interface IBasket {
  id: string
  items: IBasketItem[]
}

export interface IBasketItem {
  id: string
  subjectName: string
  price: number
  class: string
  quantity: number
  teacherId: string;
  subjectId: string;
}

export class Basket implements IBasket {
  id = uuidv4()
  items: IBasketItem[] = []
}

export interface IBasketTotals {
  shipping: number
  subTotal: number
  total: number
}
