import { ICustomer } from "../models/Customer.js";
import { CustomerRepository } from "../repositories/knex/customerRepository.js";

export async function getAllCustomers(): Promise<ICustomer[]> {
  return await CustomerRepository.findAll();
}

export class CustomerController {
  static async getAllCustomers(): Promise<ICustomer[]> {
    return await CustomerRepository.findAll();
  }
}
