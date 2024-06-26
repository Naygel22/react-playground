import { useParams } from "react-router-dom"
import { getOrderById } from "../../../api/getOrderById";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../api/constants";


export const OrderId = () => {
  const params = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.orders.get, params.id],
    queryFn: () => getOrderById(params.id)
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
      <h2>Order Details</h2>
      <p>Order ID: {data.id}</p>
      <p>Phone: {data.name}</p>
      <p>Quantity: {data.quantity}</p>
      <p>Title: {data.title}</p>
      <p>Content: {data.orderContent}</p>
    </div>

  )
}
export default OrderId

