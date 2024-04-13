import { Route, Routes } from 'react-router-dom'
import { Clients } from '../pages/clients/Clients'
import { AddClient } from '../pages/clients/add/AddClient'
import { EditClient } from '../pages/clients/id/edit/EditClient'
import { LoginPage } from '../pages/login/LoginPage'
import { RegisterPage } from '../pages/register/RegisterPage'
import { ClientId } from '../pages/clients/id/ClientId'
import { AsideMenu } from './AsideMenu'
import { AddOrderPage } from '../pages/orders/add/AddOrderPage'
import { Orders } from './Orders'

export function Browse() {
  return (
    <>
      <AsideMenu />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/clients">
          <Route index element={<Clients />} />
          <Route path="add" element={<AddClient />} />
          <Route path=":id" element={<ClientId />} />
          <Route path=":id/edit" element={<EditClient />} />
        </Route>

        <Route path="/orders">
          <Route index element={<Orders />} />
          <Route path=":id" element={<div>Id</div>} />
          <Route path="add" element={<AddOrderPage />} />
        </Route>

        <Route path="/invoices" element={<div>Invoices</div>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<div>404</div>} path="*" />
      </Routes>
    </>
  )
}