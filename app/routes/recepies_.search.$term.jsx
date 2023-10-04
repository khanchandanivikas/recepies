import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import { getRecepieByName } from "../data/recepies.server";
import ProductCard from "../components/productCard/ProductCard";
import { links as productCardStyles } from "../components/productCard/ProductCard";
import NoResult from '../components/utils/NoResult';

export const meta = () => {
  return [
    { title: "All recepies by search result" },
    { name: "description", content: "Welcome to my all recepies search page!" },
  ];
};

export function links() {
  return [...productCardStyles()];
}

export const loader = async ({params}) => {
  const data = await getRecepieByName(params.term);
  return json(data);
}

const RecepiesSearch = () => {
  const recepiesSearchList = useLoaderData();
  const hasSearchResults = recepiesSearchList && recepiesSearchList.length > 0;

  return (
    <section className="container default-section">
      <h3 className='text-primary'>Search Results</h3>
      <div className="row">
        {recepiesSearchList.map((recepie) => {
          return (
            <ProductCard key={recepie.id} link={`/recepie/${recepie.id}`} image={recepie.mainImage} text={recepie.name} />
          );
        })}
        {!hasSearchResults && <NoResult />}
      </div>
    </section>
  )
}

export default RecepiesSearch