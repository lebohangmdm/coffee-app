import { useState } from "react";
import { coffeeData } from "../../data";
import Coffee from "./Coffee";

const categories = new Set(coffeeData.map((coffee) => coffee.category));
const allCategories = ["all", ...categories];

const Menu = () => {
  const [menuItems, setMenuItems] = useState(coffeeData);
  const [categories, setCategories] = useState(allCategories);
  const [sortBy, setSortBy] = useState("input");

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(coffeeData);
      return;
    }
    const newItems = coffeeData.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  let sortedItems;
  if (sortBy === "input") sortedItems = menuItems;
  if (sortBy === "lowest")
    sortedItems = menuItems.sort((a, b) => a.price - b.price);
  if (sortBy === "highest")
    sortedItems = menuItems.sort((a, b) => b.price - a.price);

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
            {categories.map((category, i) => {
              return (
                <button
                  key={i}
                  className={`button `}
                  onClick={() => filterItems(category)}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="select-container">
            <select
              className="select"
              name="sortBy"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Sort by</option>
              <option value="lowest">Sort by lowest</option>
              <option value="highest">Sort by highest</option>
            </select>
          </div>

          <ul className="coffees">
            {sortedItems.map((coffee) => {
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
