import ProductCard from "../components/ProductCard";

export const meta = () => {
  return [
    { title: "All recepies by search result" },
    { name: "description", content: "Welcome to my all recepies search page!" },
  ];
};

const RecepiesSearch = () => {
  return (
    <section className="container mt-4">
      <div className="row">
        <ProductCard link="/recepie/123" image="https://www.simplyrecipes.com/thmb/pVLKjFHsrQqicitWB6fDPAKQ1RA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Copycat-panera-broccoli-cheddar-soup-LEAD-1-01-122f8ec37b3945a3bd8dff943166f866.jpg" text="Avacado sandwich" />
        <ProductCard link="/recepie/123" image="https://www.simplyrecipes.com/thmb/pVLKjFHsrQqicitWB6fDPAKQ1RA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Copycat-panera-broccoli-cheddar-soup-LEAD-1-01-122f8ec37b3945a3bd8dff943166f866.jpg" text="Avacado sandwich" />
        <ProductCard link="/recepie/123" image="https://www.simplyrecipes.com/thmb/pVLKjFHsrQqicitWB6fDPAKQ1RA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Copycat-panera-broccoli-cheddar-soup-LEAD-1-01-122f8ec37b3945a3bd8dff943166f866.jpg" text="Avacado sandwich" />
        <ProductCard link="/recepie/123" image="https://www.simplyrecipes.com/thmb/pVLKjFHsrQqicitWB6fDPAKQ1RA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Copycat-panera-broccoli-cheddar-soup-LEAD-1-01-122f8ec37b3945a3bd8dff943166f866.jpg" text="Avacado sandwich" />
        <ProductCard link="/recepie/123" image="https://www.simplyrecipes.com/thmb/pVLKjFHsrQqicitWB6fDPAKQ1RA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Copycat-panera-broccoli-cheddar-soup-LEAD-1-01-122f8ec37b3945a3bd8dff943166f866.jpg" text="Avacado sandwich" />
        <ProductCard link="/recepie/123" image="https://www.simplyrecipes.com/thmb/pVLKjFHsrQqicitWB6fDPAKQ1RA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Copycat-panera-broccoli-cheddar-soup-LEAD-1-01-122f8ec37b3945a3bd8dff943166f866.jpg" text="Avacado sandwich" />
      </div>
    </section>
  )
}

export default RecepiesSearch