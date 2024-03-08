import { categories, coffeeData } from "../../data";
import Coffee from "./Coffee";

const Menu = () => {
  return (
    <main className="menu">
      <h2 className="text-center">Our menu</h2>

      {coffeeData ? (
        <>
          <p className="text-center">
            Love Brews Here. This where coffee meets Love. Share your most
            memorable and heart-warming coffee date and stories.{" "}
            {coffeeData.length} brewed coffees to choose from
          </p>

          <div className="btn-container">
            {categories.map((item, i) => {
              return (
                <button key={i} className="button">
                  {item}
                </button>
              );
            })}
          </div>

          <div className="select-container">
            <select className="select" name="sortBy">
              <option value="">Sort by</option>
              <option value="lowest">Sort by lowest</option>
              <option value="highest">Sort by highest</option>
            </select>
          </div>

          <ul className="coffees">
            {coffeeData.map((coffee) => {
              return <Coffee key={coffee.name} coffee={coffee} />;
            })}
          </ul>
        </>
      ) : (
        <p>We&apos;re still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
};
export default Menu;
