import { useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "../../../api/constants"
import { Order, getAllOrdersForPhoneNumber } from "../../../api/getAllOrders"

type Step2Props = {
  currentClientPhone: string
  onUpdatePickedOrders: React.Dispatch<React.SetStateAction<Order[]>>
  pickedOrders: Order[];
}

export const Step2 = ({ currentClientPhone, onUpdatePickedOrders, pickedOrders }: Step2Props) => {

  const { data, isLoading, error } = useQuery({
    queryKey: ["telNum", currentClientPhone],
    queryFn: () => getAllOrdersForPhoneNumber(currentClientPhone),
    enabled: !!currentClientPhone
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

  // const selectedClientOrders = data.filter(
  //   (order) => order.name === currentClientPhone
  // );
  // console.log("data", data)

  function handlePickOrders(order: Order) {
    const isPreviouslyAdded = pickedOrders.some(pickedOrder => pickedOrder.id === order.id)
    if (!isPreviouslyAdded) {
      onUpdatePickedOrders(prev => [...prev, order])
    } else {
      const deduplicatedOrders = pickedOrders.filter(pickedOrder => pickedOrder.id !== order.id)
      onUpdatePickedOrders(deduplicatedOrders)
    }

  }

  return (

    <div>
      {data.map(order => (
        <div key={order.id}>
          <h2>Order {order.id}</h2>
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