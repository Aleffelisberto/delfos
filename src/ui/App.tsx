import { Calendar, PlusCircle, Search } from "lucide-react";
import { AppSidebar } from "./components/app-sidebar";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Label } from "./components/ui/label";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        <div className="p-6 max-w-4xl mx-auto space-y-10 my-10">
          <h1 className="text-4xl font-bold flex flex-items">
            <Calendar className="w-8 h-8 mr-2" />
            Clientes
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
                <Button>
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
                  <div className="grid grid-cols-4 items-center text-right gap-3">
                    <Label htmlFor="name">Nome</Label>
                    <Input className="col-span-3" name="name" />
                  </div>

                  <div className="grid grid-cols-4 items-center text-right gap-3">
                    <Label htmlFor="phone1">Telefone</Label>
                    <Input className="col-span-3" name="phone1" />
                  </div>

                  <div className="grid grid-cols-4 items-center text-right gap-3">
                    <Label htmlFor="phone2">Telefone 2</Label>
                    <Input className="col-span-3" name="phone2" />
                  </div>

                  <div className="grid grid-cols-4 items-center text-right gap-3">
                    <Label htmlFor="birthdate">Data de nascimento</Label>
                    <Input className="col-span-3" name="birthdate" />
                  </div>

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
                  <TableHead>Nome</TableHead>
                  <TableHead>Telefone 1</TableHead>
                  <TableHead>Telefone 2</TableHead>
                  <TableHead>Aniversário</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((customer) => {
                  return (
                    <TableRow key={customer.id}>
                      <TableCell className="font-medium">{customer.name}</TableCell>
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
      </SidebarProvider>
    </ThemeProvider>
  );
}

type ICustomer = {
  id: string;
  name: string;
  phone1: string;
  phone2?: string;
  birthDay: string;
};

const customers: ICustomer[] = [
  {
    id: "1",
    name: "Monique da Silva",
    phone1: "11 9999-9999",
    birthDay: "01/01",
  },
  {
    id: "2",
    name: "Barbinha",
    phone1: "27 9999-9999",
    phone2: "27 9999-9999",
    birthDay: "13/12",
  },
  {
    id: "3",
    name: "Roberta Guimarães",
    phone1: "27 9999-9999",
    birthDay: "12/10",
  },
  {
    id: "4",
    name: "Maria da Silva",
    phone1: "27 9999-9999",
    birthDay: "12/10",
  },
  {
    id: "5",
    name: "Gagaça",
    phone1: "27 9999-9999",
    birthDay: "12/10",
  },
  {
    id: "6",
    name: "Mariana Souza",
    phone1: "27 9999-9999",
    birthDay: "12/10",
  },
];

export default App;
