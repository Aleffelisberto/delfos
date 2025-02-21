import { mockCustomers } from "@/data/mock-customers";
import { ICustomer } from "@/models/customer";

export async function getCustomers(): Promise<ICustomer[]> {
  await window.electron.getAllCustomers();

  return mockCustomers;
}
