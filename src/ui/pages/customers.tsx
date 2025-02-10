import { TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Table } from "lucide-react";

type ICustomer = {
  id: number;
  name: string;
  phone1: string;
  phone2?: string;
  birthDay: string;
};

const customers: ICustomer[] = [
  {
    id: 1,
    name: "Monique da Silva",
    phone1: "11 9999-9999",
    birthDay: "01/01",
  },
  {
    id: 2,
    name: "Barbinha",
    phone1: "27 9999-9999",
    phone2: "27 9999-9999",
    birthDay: "13/12",
  },
  {
    id: 3,
    name: "Roberta Guimarães",
    phone1: "27 9999-9999",
    birthDay: "12/10",
  },
  {
    id: 4,
    name: "Maria da Silva",
    phone1: "27 9999-9999",
    birthDay: "12/10",
  },
  {
    id: 5,
    name: "Gagaça",
    phone1: "27 9999-9999",
    birthDay: "12/10",
  },
  {
    id: 6,
    name: "Mariana Souza",
    phone1: "27 9999-9999",
    birthDay: "12/10",
  },
];

export function Customers() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="border rounded">
        <Table>
          <TableHeader>
            <TableHead>Nome</TableHead>
            <TableHead>Telefone 1</TableHead>
            <TableHead>Telefone 2</TableHead>
            <TableHead>Aniversário</TableHead>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => {
              return (
                <TableRow key={customer.id}>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.phone1}</TableCell>
                  <TableCell>{customer.phone2}</TableCell>
                  <TableCell>{customer.birthDay}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
