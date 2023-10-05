import { NavLink } from "@remix-run/react";
import {tags} from "../../data/tags";
import styles from "./aside.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const Aside = () => {
  return (
    <section className='container'>
      <div className='row px-3'>
        <nav id="tags-nav" className="nav">
          <ul className="navbar-nav d-flex flex-row align-items-center gap-4 flex-wrap">
            {tags.map((tag) => {
              return(
                <li key={tag} className="nav-item">
                  <NavLink className={({ isActive }) => isActive ? "nav-link Xtext-primary text-decoration-none bordered-rounded-teritary"  : "Xtext-primary text-decoration-none"} to={`/recepies/${tag}`}>
                    {tag}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Aside