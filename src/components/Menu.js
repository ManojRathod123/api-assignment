import react from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (

    <div className="MenuStyle">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/registration">Registration</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/genres">Genres</Link>
        </li>
        <li>
          <Link to="/customers">Customers</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        
      </ul>
    </div>

  );
};
export default Menu;
