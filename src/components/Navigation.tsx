import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <Link to='/clients'>Clients</Link>
      <Link to='/clients/add'>Add</Link>
      <Link to='/clients/1'>Client 1</Link>
      <Link to='/clients/1/edit'>Edit</Link>
    </>

  )
}