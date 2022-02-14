import React, { useState, useEffect } from "react";

function Coffees() {
  const [coffeeList, setCoffeeList] = useState();
  const [temp, setTemp] = useState('hot');
  useEffect(() => {
    fetch(`https://api.sampleapis.com/coffee/${temp}`)
      .then((response) => response.json())
      .then((data) => setCoffeeList(data))
      .catch((err) => console.error(err));
  }, [temp]);
  return (
    //use parentheses here, not brackets
    <section className="coffee-container" id="coffees">
      {/*need one containing element, don't need it to be a react fragment (<></> if we dont want any HTML to render) */}
      <h2>Coffee Recipes</h2>
      <button onClick={()=>setTemp('hot')}>Hot</button> 
      <button onClick={()=>setTemp('iced')}>Iced</button>
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
