import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import Search from "../forms/Search";
import { useCart } from "../../context/cart";
import { Badge } from "antd";

const Menu=()=> {
  // context
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  // hooks
 
  const navigate = useNavigate(); 

  const logout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <>
      <ul className="nav d-flex justify-content-between shadow-sm mb-2 sticky-top bg-light">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">
            HOME
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/searchprogram">
            SEARCH PROGRAM
          </NavLink>
        </li>
        <li className="nav-item mt-1">
          <Badge
            count={cart?.length >= 1 ? cart.length : 0}
            offset={[-5, 11]}
            showZero={true}
          >
            <NavLink className="nav-link" aria-current="page" to="/cart">
              SHORT LISTED
            </NavLink>
          </Badge>
        </li>

        <Search />

        {!auth?.user ? (
          <>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                LOGIN
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                REGISTER
              </NavLink>
            </li>
          </>
        ) : (
          <div className="dropdown">
            <li>
              <NavLink
                className="nav-link pointer dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                {`Hello ${auth?.user?.firstName?.toUpperCase()} ${auth?.user?.lastName?.toUpperCase()}`}
              </NavLink>

              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="nav-link"
                    to={`/dashboard/${
                      auth?.user?.role === "admin" ? "admin" : "user"
                    }`}
                  >
                    Dashboard
                  </NavLink>
                </li>

                <li className="nav-item pointer ms-3">
                  <button onClick={logout} className="btn btn-outline-primary ">
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          </div>
        )}
      </ul>
    </>
  );
}

export default Menu;
