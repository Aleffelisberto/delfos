type Customers = {
  id: number;
  name: string;
  phone1: string;
  phone2: string;
  birthDate: Date;
}[];

type EventPayloadMapping = {
  getAllCustomers: Promise<Customers>;
  sendFrameAction: FrameWindowAction;
};

interface Window {
  electron: {
    getAllCustomers: () => Promise<Customers>;
    sendFrameAction: (payload: FrameWindowAction) => void;
  };
}
