import Table from "react-bootstrap/Table";
import {HiTrash} from "react-icons/hi";

function OrderTable({content}) {
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {content.map((cartProduct) =>(
          <tr>
          <td>{cartProduct.name}</td>
          <td>{cartProduct.price}</td>
          <td></td>
          <td><HiTrash/></td>
        </tr>
          )
          )}
          
        </tbody>
      </Table>
    </div>
  );
}

export default OrderTable;
