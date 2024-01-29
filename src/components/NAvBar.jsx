import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <ol>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/signup" className="link">
            SignUp
          </Link>
        </li>
        <li>
          <Link to="/login" className="link">
            Login
          </Link>
        </li>
      </ol>
    </div>
  );
};
export default NavBar;
