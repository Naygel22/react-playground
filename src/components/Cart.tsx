import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppSelector } from "../state/store";
import { ROUTES } from "../routes";

const Cart = () => {
  const selectedOrders = useAppSelector((state: RootState) => state.order.selectedOrders);

  return (
    <div>
      <h2>Cart</h2>
      {selectedOrders.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {selectedOrders.map((order) => (
            <Link to={ROUTES.ordersId(order.id)} key={order.id}>
              <div >
                {order.name}
              </div>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
