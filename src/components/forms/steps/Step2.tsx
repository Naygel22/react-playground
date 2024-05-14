import { useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "../../../api/constants"
import { getAllOrders } from "../../../api/getAllOrders"
import { useState } from "react"

export const Step2 = ({ currentClientPhone, onUpdatePickedOrders }) => {
  const [pickedOrders, setPickedOrders] = useState([])

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

  const selectedClientOrders = data.filter(
    (order) => order.name === currentClientPhone
  );
  console.log(pickedOrders)

  function handlePickOrders(order) {
    const isPicked = pickedOrders.find(pickedOrder => pickedOrder === order)
    if (isPicked) {
      const deletePicked = pickedOrders.filter(pickedOrder => pickedOrder !== order)
      setPickedOrders(deletePicked)
      onUpdatePickedOrders(pickedOrders)
    } else {
      setPickedOrders([...pickedOrders, order])
      onUpdatePickedOrders(pickedOrders)
    }

  }

  return (

    <div>
      {selectedClientOrders.map(order => (
        <div key={order.id}>
          <h2>Current Form Values</h2>
          <p>Phone: {order.name}</p>
          <p>Quantity: {order.quantity}</p>
          <p>Title: {order.title}</p>
          <p>Content: {order.orderContent}</p>
          <button onClick={() => handlePickOrders(order)}>{pickedOrders.some((pickedOrder) => pickedOrder.id === order.id) ? 'Picked' : 'Pick'}</button>
        </div>
      ))

      }

    </div>
  )
}