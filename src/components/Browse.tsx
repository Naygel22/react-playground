import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import CircularLoading from './CircularLoading';
import { AsideMenu } from './AsideMenu';
import { ProtectedWrapper } from './ProtectedWrapper';
import { MultiStepForm } from './forms/MultiStepForm';

const Clients = lazy(() => import('../pages/clients/Clients'));
const AddClient = lazy(() => import('../pages/clients/add/AddClient'));
const ClientId = lazy(() => import('../pages/clients/id/ClientId'));
const EditClient = lazy(() => import('../pages/clients/id/edit/EditClient'));
const Orders = lazy(() => import('./Orders'));
const OrderId = lazy(() => import('../pages/orders/id/OrderId'));
const AddOrderPage = lazy(() => import('../pages/orders/add/AddOrderPage'));
const Invoices = lazy(() => import('../pages/invoices/Invoices'))
const RegisterPage = lazy(() => import('../pages/register/RegisterPage'));
const LoginPage = lazy(() => import('../pages/login/LoginPage'));

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

          <Route path="/invoices">
            <Route index element={<ProtectedWrapper><Invoices /></ProtectedWrapper>} />
            <Route path="add" element={<MultiStepForm />} />
          </Route>

          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<div>404</div>} path="*" />
        </Routes>
      </Suspense>
    </>
  )
}
