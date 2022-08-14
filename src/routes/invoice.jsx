import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";

export default function Invoice(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const invoice = getInvoice(parseInt(params.invoiceId));

  return (
    <main style={{ padding: "1rem" }}>
      <h3 style={{ marginBottom: 0 }}>Счет №{params.invoiceId}</h3>
      <small>Заказчик: {invoice.name}</small>
      <h2>Всего к оплате: {invoice.amount}</h2>
      <p>Срок оплаты: {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate("/invoices" + location.search);
          }}
        >
          Удалить
        </button>
      </p>
    </main>
  );
}
