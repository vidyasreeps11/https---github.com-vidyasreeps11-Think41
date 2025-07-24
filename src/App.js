import { useEffect, useState } from "react";
import "./App.css";

import DisplayDiv from "./components/DisplayDiv";
import NavigationDiv from "./components/NavigationDiv";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/productData.json")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(products);

  return (
    <div className="App">
      <div className="head_div">Product Catelog</div>
      <NavigationDiv></NavigationDiv>
      <br></br>
      <br></br>
      {products.length > 0 ? (
        <DisplayDiv data={products}></DisplayDiv>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
