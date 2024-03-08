/* eslint-disable react/prop-types */
function Coffee({ coffee }) {
  const { name, description, price, photoName, soldOut } = coffee;
  console.log(coffee);

  return (
    <li key={name} className={`coffee ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>

        <span>{soldOut ? "SOLD OUT" : `$${price}`}</span>
      </div>
    </li>
  );
}

export default Coffee;
