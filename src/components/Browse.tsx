import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navigation } from './Navigation'
import { AsideMenu } from './AsideMenu'
export function Browse() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/clients">
          <Route index element={<div>Clients</div>} />
          <Route path="add" element={<AsideMenu />} />
          <Route path=":id" element={<div>Id</div>} />
          <Route path=":id/edit" element={<div>Edit</div>} />
        </Route>

        <Route path="/orders">
          <Route index element={<div>Orders</div>} />
          <Route path=":id" element={<div>Id</div>} />
          <Route path="add" element={<div>Add</div>} />
        </Route>

        <Route path="/invoices" element={<div>Invoices</div>} />
        <Route element={<div>404</div>} path="*" />
      </Routes>
    </BrowserRouter>
  )
}