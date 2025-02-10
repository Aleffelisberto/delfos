import { ICustomerProduct } from "./CustomerProduct.js";
import { ICustomerService } from "./CustomerService.js";

export interface ISale {
  id: number;
  customerId: number;
  price: number;
  customerServices: ICustomerService[];
  customerProducts: ICustomerProduct[];
}
