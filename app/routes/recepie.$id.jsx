import Button from "../components/ui/Button";
import styles from "../styles/recepie.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const NutritionValues = () => {
  return (
    <>
      <h4 className='mt-2'>Nutrition Facts</h4>
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">Calories</th>
            <td>150</td>
          </tr>
          <tr>
            <th scope="row">Total Fat</th>
            <td>25g</td>
          </tr>
          <tr>
            <th scope="row">Cholestrol</th>
            <td>4%</td>
          </tr>
          <tr>
            <th scope="row">Sodium</th>
            <td>5mg</td>
          </tr><tr>
            <th scope="row">Potassium</th>
            <td>5mg</td>
          </tr><tr>
            <th scope="row">Carbs</th>
            <td>10mg</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

const MainIngredients = () => {
  return (
    <>
      <h4>Main Ingredients</h4>
      <ul>
        <li>1lb ground beef</li>
        <li>1 egg</li>
        <li>2 cups water</li>
      </ul>
    </>
  );
};

const Instructions = () => {
  return (
    <>
      <h4>Cooking Instructions</h4>
      <ol>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit</li>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit</li>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit</li>
      </ol>
    </>
  );
}

const Recepie = () => {
  return (
    <div className='container'>
      <div className='row'>
        <section className='default-section'>
          <div className='row'>
            <div className='col-xs-12 col-sm-8 position-relative XrecepieImageContainer'>
              <img src="https://www.simplyrecipes.com/thmb/pVLKjFHsrQqicitWB6fDPAKQ1RA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Copycat-panera-broccoli-cheddar-soup-LEAD-1-01-122f8ec37b3945a3bd8dff943166f866.jpg" className='rounded' alt="product" title='recepie img' />
              <Button iconClass="bi bi-heart-fill" />
            </div>
            <div className='col-xs-12 col-sm-4'>
              <NutritionValues />
            </div>
          </div>
        </section>
        <section className='mb-4'>
          <MainIngredients />
        </section>
        <section className='mb-4'>
          <Instructions />
        </section>
      </div>
    </div>
  )
}

export default Recepie