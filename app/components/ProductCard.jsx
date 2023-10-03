import { Link } from "@remix-run/react";

const ProductCard = ({ link, image, text }) => {
  return (
    <div className="col-xs-12 col-sm-4">
      <Link to={link} className="text-decoration-none">
        <div className="card mb-4">
          <img className="card-img-top" src={image} alt="Card image" title="product" />
          <div className="card-body">
          <h4 className="card-text">{text}</h4>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard