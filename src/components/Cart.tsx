import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { ROUTES } from "../routes";

const Cart = () => {
  const selectedOrders = useSelector((state: RootState) => state.order.selectedOrders);

  return (
    <div>
      <h2>Cart</h2>
      {selectedOrders.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {selectedOrders.map((orderId) => (
            <li key={orderId}>
              <Link to={ROUTES.ordersId(orderId)}>Order Details</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
