import Table from "react-bootstrap/Table";
import { HiCurrencyRupee, HiTrash } from "react-icons/hi";
import "./Cart.scss";
import Counter from "./Counter";
import { useState } from "react";

function OrderTable({ content }) {
  const calcTotal = (items) => {
    const total = items.reduce((acc, curr) => {
      console.log(acc, curr);
    });
  };
  const [order, setOrder] = useState({
    items: content,
    total: calcTotal(content),
  });

  return (
    <div>
      <Table striped>
        <thead>
          <tr className="table-danger">
            <th>Producto</th>
            <th>Precio</th>
            <th className="text-center">Cantidad</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {content.map((cartProduct) => (
            <tr>
              <td>{cartProduct.name}</td>
              <td>{cartProduct.price}</td>
              <td>
                <Counter />
              </td>
              <td></td>
              <td>
                <HiTrash />
              </td>
            </tr>
          ))}
          <tr className="total">
            <th>Total</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default OrderTable;
