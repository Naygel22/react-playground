import { useEffect, useState } from "react"
import { getAllOrders } from "../api/getAllOrders"

export const Orders = () => {
  const [orders, setOrders] = useState([])

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
          <p>Name: {order.formValues.name}</p>
          <p>Quantity: {order.formValues.quantity}</p>
          <p>Title: {order.formValues.title}</p>
          <p>Content: {order.formValues.orderContent}</p>
          <button>Details</button>
        </div>
      ))

      }

    </div>
  )
}
