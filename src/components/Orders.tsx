import { getAllOrders } from "../api/getAllOrders"
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export const Orders = () => {

  const { data, isLoading, error } = useQuery({
    queryKey: ["orders"],
    queryFn: getAllOrders
  })

  if (!data) {
    return <p>No data...</p>
  }
  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error</p>
  }

  return (

    <div>
      {data.map(order => (
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
