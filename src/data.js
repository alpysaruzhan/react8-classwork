let invoices = [
  {
    name: "Базис-А",
    number: 123170,
    amount: "$10,800",
    due: "12/08/2022",
  },
  {
    name: "Royal Petrol",
    number: 456175,
    amount: "$8,000",
    due: "10/09/2022",
  },
  {
    name: "Казахдорстрой",
    number: 798197,
    amount: "$9,500",
    due: "07/01/2023",
  },
  {
    name: "Mercur Auto",
    number: 147202,
    amount: "$14,000",
    due: "09/02/2023",
  },
  {
    name: "АПК-Инвест",
    number: 368205,
    amount: "$4,600",
    due: "01/12/2022",
  },
];

export function getInvoices() {
  return invoices;
}

export function getInvoice(number) {
  return invoices.find((invoice) => invoice.number === number);
}

export function deleteInvoice(number) {
  invoices = invoices.filter((invoice) => invoice.number !== number);
}
