import {
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Table,
  TableHead,
} from "@/components/ui/table";
import {
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Calendar, PlusCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getCustomers } from "@/services/customers-service";
import { ICustomer } from "@/models/customer";

export function Customers() {
  const [customers, setCustomers] = useState([] as ICustomer[]);

  useEffect(() => {
    getCustomers().then((res) => setCustomers(res));
  }, []);

  const customerItems: Record<string, string>[] = [
    { name: "Nome" },
    { whatsapp: "Whatsapp" },
    { phone: "Telefone" },
    { instagram: "Instagram" },
    { birthDate: "Data de Nascimento" },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-10 my-10">
      <h1 className="text-4xl font-bold flex flex-items">
        <Calendar className="w-8 h-8 mr-2" />
        <span>Clientes</span>
      </h1>
      <div className="flex items-center justify-between gap-2">
        <form className="flex items-center gap-2">
          <Input name="name" placeholder="Nome da cliente" />
          <Button type="submit" variant="secondary">
            <Search className="w-4 h-4 mr-2" />
            Filtrar resultados
          </Button>
        </form>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-pink-200 hover:bg-pink-300">
              <PlusCircle className="w-4 h-4 mr-2" />
              Nova cliente
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Adicionar nova cliente</DialogTitle>
              <DialogDescription>Criar uma nova cliente no sistema</DialogDescription>
            </DialogHeader>

            <form className="space-y-6" action="">
              {customerItems.map((item) => {
                const key = Object.keys(item)[0];
                const value = Object.values(item)[0];
                return (
                  <div className="grid grid-cols-4 items-center text-right gap-3">
                    <Label htmlFor={key}>{value}</Label>
                    <Input className="col-span-3" name={key} />
                  </div>
                );
              })}
              <DialogFooter>
                <DialogTrigger asChild>
                  <Button type="button" variant="outline">
                    Cancelar
                  </Button>
                </DialogTrigger>
                <Button type="submit">Salvar</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Nome</TableHead>
              <TableHead className="w-[200px]">Whatsapp</TableHead>
              <TableHead className="w-[200px]">Telefone</TableHead>
              <TableHead className="w-[200px]">Instagram</TableHead>
              <TableHead className="w-[200px]">Aniversário</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => {
              return (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>{customer.whatsapp}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>{customer.instagram}</TableCell>
                  <TableCell>{customer.birthDate}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
