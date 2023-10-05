import { useLoaderData } from "@remix-run/react";
import { json } from '@remix-run/node';
import { getRecepieById } from "../data/recepies.server";
import styles from "../styles/recepie.css";
import Button from "../components/ui/Button";

export function meta({ params, location, data, parentsData }) {
  return [
    { title: `${data.name}` },
    { name: "description", content: `${data?.cuisines[0]}` },
  ];
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const loader = async ({params}) => {
  const data = await getRecepieById(params.id);
  return json(data);
}

const MainImage = ({ image, name }) => {
  return (
    <>
      <img src={image} className='rounded' alt={name} title={name} />
      <Button iconClass="bi bi-heart-fill" />
    </>
  );
}

const NutritionValues = ({ nutrients }) => {
  return (
    <>
      <h5 className='mt-2'>Nutrition Facts</h5>
      <table className="table">
        <tbody>
          {Object.keys(nutrients).map(function(key) {
            return (
              <tr key={key}>
                <th scope="row">{key}</th>
                <td>{nutrients[key]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

const MainIngredients = ({ ingredients }) => {
  return (
    <>
      <h5>Main Ingredients</h5>
      <ul>
        {ingredients.map((ingredient) => {
          return <li key={ingredient}>{ingredient}</li>;
        })}
      </ul>
    </>
  );
};

const Instructions = ({ instructionsList }) => {
  return (
    <>
      <h5>Cooking Instructions</h5>
      <ol>
        {instructionsList?.map((instruction) => {
          return <li key={instruction}>{instruction}</li>
        })}
      </ol>
    </>
  );
}

const Recepie = () => {
  const recepieInfo = useLoaderData();
  return (
    <div className='container'>
      <div className='row'>
        <section className='default-section'>
          <div className='row'>
            <h1 className="Xtext-primary my-3">{recepieInfo.name}</h1>
            <div className='col-sm-8 position-relative XrecepieImageContainer'>
              <MainImage image={recepieInfo.mainImage} name={recepieInfo.name} />
            </div>
            <div className='col-sm-4 border'>
              <NutritionValues nutrients={recepieInfo.nutritionalInfo} />
              <small>Prep time: {recepieInfo.totalTime}</small>
            </div>
          </div>
        </section>
        <section className='mb-4'>
          <MainIngredients ingredients={recepieInfo.ingredientLines} />
        </section>
        <section className='mb-4'>
          <Instructions instructionsList={recepieInfo.instructions} />
        </section>
      </div>
    </div>
  )
}

export default Recepie