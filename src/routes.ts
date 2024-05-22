export const ROUTES = {
  home: "/",
  clients: "/clients",
  clientsAdd: "/clients/add",
  clientsId: (id: string | undefined) => `/clients/${id}`,
  clientsIdEdit: (clientId: string) => `/clients/${clientId}/edit`,
  orders: "/orders",
  ordersId: (orderId: string) => `/orders/${orderId}`,
  ordersAdd: '',
  invoices: "/invoices",
  register: "/register",
  login: "/login"
}


