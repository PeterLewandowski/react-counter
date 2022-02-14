import React, { useState, useEffect } from "react";

function Coffees() {
  const [coffeeList, setCoffeeList] = useState();
  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((response) => response.json())
      .then((data) => setCoffeeList(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    //use parentheses here, not brackets
    <section className="coffee-container" id="coffees">
      {/*need one containing element, don't need it to be a react fragment*/}
      <h2>Coffee Recipes</h2>
      {!coffeeList ? (
        <h3>Loading...</h3>
      ) : (
        <ol>
          {coffeeList.map((coffee) => {
            return <li key={coffee.id}>{coffee.title}</li>;
          })}
        </ol>
      )}
      {/* getting an error if <ol>statement above is not in a conditional render in, because return runs BEFORE useEffect, we need to create a "loadingState" via conditional rendering above*/}
    </section>
  );
}

export default Coffees;
