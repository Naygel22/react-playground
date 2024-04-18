import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getOrderById } from "../../../api/getOrderById";
import { Order } from "../../../api/getAllOrders";


export const OrderId = () => {
  const [order, setOrder] = useState<Order | undefined>(undefined)
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      getOrderById(params.id).then(data => {
        setOrder(data);
      })

    }
  }, [params.id])

  if (!order) {
    return <p>Not found</p>
  }

  return (
    <div>
      <h2>Order Details</h2>
      <p>Order ID: {order.id}</p>
      <p>Phone: {order.name}</p>
      <p>Quantity: {order.quantity}</p>
      <p>Title: {order.title}</p>
      <p>Content: {order.orderContent}</p>
    </div>

  )
}


