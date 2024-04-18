import { useEffect, useState } from "react"
import { Order, getAllOrders } from "../api/getAllOrders"
import { Link } from "react-router-dom";

export const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    getAllOrders().then((data) => {
      setOrders(data);
    });
  }, []);

  return (

    <div>
      {orders.map(order => (
        <div key={order.id}>
          <h2>Current Form Values</h2>
          <p>Phone: {order.name}</p>
          <p>Quantity: {order.quantity}</p>
          <p>Title: {order.title}</p>
          <p>Content: {order.orderContent}</p>
          <Link to={`/orders/${order.id}`}>
            <button>Details</button>
          </Link>
        </div>
      ))

      }

    </div>
  )
}
