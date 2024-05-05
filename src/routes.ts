import { Client } from "./api/getAllClients";
import { Order } from "./api/getAllOrders";

export const ROUTES = {
  home: "/",
  clients: "/clients",
  clientsAdd: "/clients/add",
  clientsId: (id: string | undefined) => `/clients/${id}`,
  clientsIdEdit: (data: Client) => `/clients/${data.id}/edit`,
  orders: "orders",
  ordersId: (order: Order) => `/orders/${order.id}`,
  ordersAdd: '',
  invoices: "/invoices",
  register: "/register",
  login: "/login"
}


