import { Link, NavLink } from "@remix-run/react";
import styles from "./header.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const Header = () => {
  return (
    <header className="container-fluid XnavContainer px-4 py-1">
      <div className="row">
        <div className="col-4">
          <Link to="/">
            <img className="navbar-brand XlogoImg" src="/images/logo.png" alt="site logo" title="Brand logo" width={50} height={50} />
          </Link>
        </div>
        <nav id="main-nav" className="col-8 nav d-flex justify-content-end align-items-center">
          <ul className="navbar-nav d-flex flex-row gap-4">
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link p-0 Xtext-primary text-decoration-none Xborder-bottom border-secondary"  : "Xtext-primary text-decoration-none"} to="/recepies">
                Recepies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link p-0 Xtext-primary text-decoration-none Xborder-bottom border-secondary"  : "Xtext-primary text-decoration-none"} to="/account?mode=login">
                Account
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
