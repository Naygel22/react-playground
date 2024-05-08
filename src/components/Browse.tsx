import { Route, Routes } from 'react-router-dom'
import { AddClient } from '../pages/clients/add/AddClient'
import { EditClient } from '../pages/clients/id/edit/EditClient'
import { LoginPage } from '../pages/login/LoginPage'
import { RegisterPage } from '../pages/register/RegisterPage'
import { ClientId } from '../pages/clients/id/ClientId'
import { AsideMenu } from './AsideMenu'
import { AddOrderPage } from '../pages/orders/add/AddOrderPage'
import { Orders } from './Orders'
import { OrderId } from '../pages/orders/id/OrderId'
import { ProtectedWrapper } from './ProtectedWrapper'
import { lazy, Suspense } from 'react'
import CircularLoading from './CircularLoading'

const Clients = lazy(() => import('../pages/clients/Clients'));

export function Browse() {
  return (
    <>
      <AsideMenu />
      <Suspense fallback={<CircularLoading />}>
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
            <Route path=":id" element={<OrderId />} />
            <Route path="add" element={<AddOrderPage />} />
          </Route>

          <Route path="/invoices" element={<ProtectedWrapper><div>Invoices</div></ProtectedWrapper>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<div>404</div>} path="*" />
        </Routes>
      </Suspense>
    </>
  )
}