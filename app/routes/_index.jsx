import styles from "../styles/home.css";
import Button from "../components/ui/Button";
import SearchForm from "../components/forms/SearchForm";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta = () => {
  return [
    { title: "Recepies App page" },
    { name: "description", content: "Welcome to my recepies page!" },
  ];
};

const Hero = () => {
  return (
    <section className="container default-section">
      <div className="row">
        <div className="col-sm-6 d-grid gap-1 XheroImages">
          <div><img className="rounded" src="/images/home/home_grid1.jpg" alt="grid one" title="grid image one" /></div>
          <div><img className="rounded" src="/images/home/home_grid2.jpg" alt="grid two" title="grid image one" /></div>
          <div className="rounded d-flex flex-column justify-content-center align-items-center text-white text-center Xbg-secondary p-4"><span className="font-size-15"><i className="bi bi-globe2"></i></span><span>Learn to cook anything</span></div>
        </div>
        <div className="col-sm-6 Xalign-center flex-column">
          <h2 className="mt-2">Give yourself a lifetime of cooking confidence</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
            reiciendis reprehenderit libero corporis. Placeat perspiciatis ab
            suscipit facere voluptates earum nobis aliquam autem eos. Explicabo,
            nemo expedita. Distinctio, repellendus vero.
          </p>
          <Button text="Discover more" url="/recepies" />
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  return (
    <>
      <section className="default-section Xalign-center flex-column gap-2 XsearchContainer">
        <h1 className="text-white text-center">The Thatix Recipe Community</h1>
        <SearchForm />
      </section>
      <Hero />
    </>
  );
}
