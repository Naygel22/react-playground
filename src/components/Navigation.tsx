import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <Link to='/clients'>Clients</Link>
      <Link to='/clients/add'>Add client</Link>
      <Link to='/clients/1'>Client 1</Link>
      <Link to='/clients/1/edit'>Edit</Link>
      <Link to='/orders'>Orders</Link>
      <Link to='/orders/1'>Order 1</Link>
      <Link to='/orders/add'>Add order</Link>
      <Link to='/invoices'>Invoices</Link>
    </>

  )
}