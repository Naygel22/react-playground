import { getAllOrders } from "../api/getAllOrders"
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../api/constants";
import { ROUTES } from "../routes";

export const Orders = () => {

  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.orders.getAll],
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
          <Link to={ROUTES.ordersId(order)}>
            <button>Details</button>
          </Link>
        </div>
      ))

      }

    </div>
  )
}
export default Orders