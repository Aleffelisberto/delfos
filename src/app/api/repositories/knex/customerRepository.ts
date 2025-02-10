import { debugDb } from "../../../debug.js";
import db from "../../db/connection.js";
import { ICustomer, ICustomerCreate, ICustomerUpdate } from "../../models/Customer.js";

export class CustomerRepository {
  static async findById(id: number): Promise<ICustomer | null> {
    debugDb("🔍 Finding customer by id:", id);

    const customer = await db("customers").where({ id }).first();

    if (!customer) {
      debugDb("🔍 Customer not found");

      return null;
    }

    debugDb("🔍 Found customer:", customer);

    return {
      id: customer.id,
      name: customer.name,
      phone1: customer.phone1,
      phone2: customer.phone2,
      birthDate: customer.birthDate,
    };
  }

  static async findByName(name: string): Promise<ICustomer | null> {
    debugDb("🔍 Finding customer by name:", name);

    const customer = await db("customers").where("name", "ilike", name).first();

    if (!customer) {
      debugDb("🔍 Customer not found");

      return null;
    }

    debugDb("🔍 Found customer:", customer);

    return {
      id: customer.id,
      name: customer.name,
      phone1: customer.phone1,
      phone2: customer.phone2,
      birthDate: customer.birthDate,
    };
  }

  static async findAll(): Promise<ICustomer[]> {
    debugDb("🔍 Finding all customers");

    let customers = await db("customers").select("*");

    customers = customers.map((customer) => {
      return {
        id: customer.id,
        name: customer.name,
        phone1: customer.phone1,
        phone2: customer.phone2,
        birthDate: customer.birthDate,
      };
    });

    debugDb("🔍 Found all customers:", customers);

    return customers;
  }

  static async create(customer: ICustomerCreate): Promise<ICustomer> {
    debugDb("🔧 Creating customer:", customer);

    const [id] = await db("customers").insert(customer).returning("id");

    debugDb("🔧 Created customer with id:", id);

    return {
      id,
      name: customer.name,
      phone1: customer.phone1,
      phone2: customer.phone2,
      birthDate: customer.birthDate,
    };
  }

  static async update(id: number, customer: ICustomerUpdate): Promise<ICustomer | null> {
    const customerToUpdate = await db("customers").where({ id }).first();

    if (!customerToUpdate) {
      debugDb("🔨 Customer not found");

      return null;
    }

    debugDb("🔨 Updating customer with id:", id);

    await db("customers").where({ id }).update(customer);

    debugDb("🔨 Updated customer with id:", id);

    return {
      id,
      name: customer.name || customerToUpdate.name,
      phone1: customer.phone1 || customerToUpdate.phone1,
      phone2: customer.phone2 || customerToUpdate.phone2,
      birthDate: customer.birthDate || customerToUpdate.birthDate,
    };
  }

  static async delete(id: number): Promise<void> {
    const customerToDelete = await db("customers").where({ id }).first();

    if (!customerToDelete) {
      debugDb("🔨 Customer not found");

      return;
    }

    debugDb("🗑️ Deleting customer with id:", id);

    await db("customers").where({ id }).del();

    debugDb(`🗑️ Deleted customer ${customerToDelete.name}`);
  }
}
