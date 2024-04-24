export const ROUTES = {
  home: "/",
  clients: "/clients",
  clientsAdd: "/clients/add",
  clientsId: (id: string) => `/clients/${id}`,
  clientsIdEdit: (data) => `/clients/${data.id}/edit`,
  orders: "orders",
  ordersId: (order) => `/orders/${order.id}`,
  ordersAdd: '',
  invoices: "/invoices",
  register: "/register",
  login: "/login"
}






// <AsideMenu />
// <Routes>
//   <Route path="/" element={<div>Home</div>} />
//   <Route path="/clients">
//     <Route index element={<Clients />} />
//     <Route path="add" element={<AddClient />} />
//     <Route path=":id" element={<ClientId />} />
//     <Route path=":id/edit" element={<EditClient />} />
//   </Route>

//   <Route path="/orders">
//     <Route index element={<Orders />} />
//     <Route path=":id" element={<OrderId />} />
//     <Route path="add" element={<AddOrderPage />} />
//   </Route>

//   <Route path="/invoices" element={<div>Invoices</div>} />
//   <Route path="/register" element={<RegisterPage />} />
//   <Route path="/login" element={<LoginPage />} />
//   <Route element={<div>404</div>} path="*" />
// </Routes>
// </>
