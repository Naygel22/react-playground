import { useNavigate, Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../api/constants";
import { getAllOrders } from "../api/getAllOrders";
import { deleteOrderById } from "../api/deleteOrderById";
import { ROUTES } from "../routes";
import ModalAlert from "./ModalAlert";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../state/orderSlice/orderSlice";
import { RootState, useAppSelector } from "../state/store";


export const Orders = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.orders.getAll],
    queryFn: getAllOrders
  });

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const dispatch = useDispatch()
  const selectedOrders = useAppSelector((state) => state.order.selectedOrders)

  const mutation = useMutation({
    mutationFn: async (orderId: string) => {
      return await deleteOrderById(orderId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.orders.getAll] });
      navigate(ROUTES.orders);
    },
    onError: () => {
      console.log("Something went wrong");
    }
  });

  const handleDelete = (orderId: string) => {
    mutation.mutate(orderId);
  };

  const handleToggleOrder = (orderId: string, name: string) => {
    // Sprawdzamy, czy zamówienie jest już w koszyku
    const isOrderInCart = selectedOrders.some(el => el.id === orderId);

    // Jeśli jest, usuwamy je z koszyka, w przeciwnym razie dodajemy do koszyka
    if (isOrderInCart) {
      dispatch(removeFromCart(orderId));
    } else {
      dispatch(addToCart({ id: orderId, name }));
    }
  };


  if (!data) {
    return <p>No data...</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error</p>;
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
          <ModalAlert buttonName='Delete' onConfirm={() => handleDelete(order.id)} />
          <input type="checkbox" onChange={() => handleToggleOrder(order.id, order.name)} checked={selectedOrders.some(el => el.id === order.id)} />
        </div>
      ))}
    </div>
  );
};

export default Orders;
