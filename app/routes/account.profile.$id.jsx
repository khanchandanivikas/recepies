import { useLoaderData, useFetcher, useSubmit } from "@remix-run/react";
import { json, redirect } from '@remix-run/node';
import { requireUserSession } from "../data/auth.server";
import { getUserFavouriteRecepies } from "../data/recepies.server";
import { links as productCardStyles } from "../components/productCard/ProductCard";
import ProductCard from "../components/productCard/ProductCard";
import Button from "../components/ui/Button";
import NoResult from "../components/utils/NoResult";

export function links() {
  return [...productCardStyles()];
}

export const loader = async ({request}) => {
  const userId = await requireUserSession(request);
  if (!userId) return redirect("/account?mode=login");
  const data = await getUserFavouriteRecepies(userId);
  return json(data);
}

const ProfilePage = () => {
  const favouriteRecepies = useLoaderData();
  const hasFavouriteRecepies = favouriteRecepies && favouriteRecepies.length > 0;
  const fetcher = useFetcher();

  const logout = () => {
    const proceed = confirm('Are you sure yo want to logout?');
    if (!proceed) {
      return;
    }
    fetcher.submit(null, { method: 'DELETE', action: '/account/logout' });
  };
  return (
    <section className="container default-section">
      <div className="row align-items-center my-3">
        <div className="col-12 col-sm-6">
          <h3>Your Favourite Recepies</h3>
        </div>
        <div className="col-12 col-sm-6 d-flex justify-content-end align-items-center">
          <Button click={logout} iconClass="bi bi-box-arrow-right" />
        </div>
      </div>
      <div className="row">
        {favouriteRecepies.map((recepie) => {
          return (
            <ProductCard key={recepie.node.id} link={`/recepie/${recepie.node.id}`} image={recepie.node.mainImage} text={recepie.node.name} />
          );
        })}
        {!hasFavouriteRecepies && <NoResult />}
      </div>
    </section>
  )
}

export default ProfilePage