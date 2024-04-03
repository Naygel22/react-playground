import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <header>
      <nav>
        
          
            <Link to="/">Home</Link>
          
          
            <Link to="/business">Buisness</Link>
          
          
            <Link to="/business/clients">Clients</Link>
          
          
            <Link to="/business/orders">Orders</Link>
          
          
            <Link to="/business/orders/1">Order 1</Link>
          
          
            <Link to="/business/orders/add">Add</Link>
          
        
      </nav>
    </header>
  );
}