import Table from "react-bootstrap/Table";
import { HiTrash } from "react-icons/hi";
import "./Cart.scss";
import Counter from "./Counter";
import { useCart } from "../context/CartContext";

function OrderTable({ content }) {
  const context = useCart();
  //Trae el total de la orden desde el contexto
  const total = context.total;
  return (
    <div>
      <Table striped>
        <thead>
          <tr className="table-danger">
            <th>Producto</th>
            <th>Precio</th>
            <th className="text-center">Cantidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Se construye el contenido de la tabla a partir del contenido del carrito */}
          {content.map((cartProduct, index) => (
            <tr key={index}>
              <td>{cartProduct.name}</td>
              <td>${cartProduct.price}</td>
              <td>
                <Counter
                  quantity={cartProduct.quantity}
                  updateQuantity={context.updateQuantity}
                  indexProduct={index}
                />
              </td>
              <td>
                <HiTrash onClick={()=>context.deleteItem(cartProduct.name)}/>
              </td>
            </tr>
          ))}
          <tr className="total">
            <th>Total</th>
            <th></th>
            <th>${total}</th>
            <th></th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default OrderTable;
