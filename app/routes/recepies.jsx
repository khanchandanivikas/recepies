import { Outlet } from "@remix-run/react";
import Aside from "../components/aside/Aside";
import { links as asideStyles } from "../components/aside/Aside";
import { links as productCardStyles } from "../components/productCard/ProductCard";

export function links() {
  return [...asideStyles(), ...productCardStyles()];
}

const Recepies = () => {
  return (
    <div className="default-top">
      <Aside />
      <Outlet />
    </div>
  );
};

export default Recepies;
