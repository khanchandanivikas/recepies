import { Link } from "@remix-run/react";
import styles from "./productCard.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const ProductCard = ({ link, image, text }) => {
  return (
    <div className="col-sm-4 XrecepieCard">
      <Link to={link} className="text-decoration-none">
        <div className="card mb-4">
          <img className="card-img-top" src={image} alt={text} title={text} loading="lazy" />
          <div className="card-body">
          <h5 className="card-text">{text}</h5>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard