import { useLoaderData, Await } from "@remix-run/react";
import { Suspense } from 'react';
import { json } from '@remix-run/node';
import { getDefaultRecepies } from "../data/recepies.server";
import ProductCard from "../components/productCard/ProductCard";

export const meta = () => {
  return [
    { title: "All recepies" },
    { name: "description", content: "Welcome to my all recepies page!" },
  ];
};

export const loader = async () => {
  const data = await getDefaultRecepies();
  return json(data);
}

const RecepiesDefault = () => {
  const recepies = useLoaderData();
  return (
    <section className="container mt-4">
      <div className="row">
        <Suspense fallback={<div>Loading...</div>}>
          <Await resolve={recepies} errorElement="There was a problem loading products">
            {(recepies) => recepies.map((recepie) => {
              return (
                <ProductCard key={recepie.node.id} link={`/recepie/${recepie.node.id}`} image={recepie.node.mainImage} text={recepie.node.name} />
              );
            })}
            {/* {recepies.map((recepie) => {
            return (
              <ProductCard key={recepie.node.id} link={`/recepie/${recepie.node.id}`} image={recepie.node.mainImage} text={recepie.node.name} />
              );
            })} */}
          </Await>
        </Suspense>
      </div>
    </section>
  );
};

export default RecepiesDefault;
