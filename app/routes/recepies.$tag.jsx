import { useLoaderData } from "@remix-run/react";
import { json } from '@remix-run/node';
import { getRecepiesByTag } from "../data/recepies.server";
import ProductCard from "../components/productCard/ProductCard";
import NoResult from '../components/utils/NoResult';

export const meta = () => {
  return [
    { title: "All recepies by category" },
    { name: "description", content: "Welcome to my all recepies category page!" },
  ];
};

export const loader = async ({params}) => {
  const data = await getRecepiesByTag(params.tag);
  return json(data);
}

const RecepiesCategories = () => {
  const recepies = useLoaderData();
  const hasRecepies = recepies && recepies.length > 0;
  return (
    <section className="container mt-4">
      <div className="row">
        {recepies.map((recepie) => {
          return (
            <ProductCard key={recepie.node.id} link={`/recepie/${recepie.node.id}`} image={recepie.node.mainImage} text={recepie.node.name} />
          );
        })}
        {!hasRecepies && <NoResult />}
      </div>
    </section>
  )
}

export default RecepiesCategories