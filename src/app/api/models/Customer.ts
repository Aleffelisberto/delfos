export interface ICustomer {
  id: number;
  name: string;
  phone1: string;
  phone2: string;
  birthDate: Date;
}

export interface ICustomerCreate extends Omit<ICustomer, "id"> {}

export interface ICustomerUpdate extends Partial<Omit<ICustomer, "id">> {}
