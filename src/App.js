import { useEffect, useState } from "react";
import "./App.css";

import DisplayDiv from "./components/DisplayDiv";
import FilterPanel from "./components/FilterPanel";

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [isFilterApplied, setFilterApplied] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("/productData.json")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        filterProductData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const filterProductData = (data) => {
    setProducts(data);
    let cat = data.map((d) => d.category);
    cat = [...new Set(cat)];
    let band = data.map((d) => d.brand);
    band = [...new Set(band)];

    setCategory(cat);
    setBrand(band);
  };

  const FilterDataOnApply = async (values) => {
    //console.log(values);
    setFilterApplied(1);
    let filteredProducts = await products.filter((p) => {
      return (
        (p.brand === values.brand || values.brand === "") &&
        (p.category === values.category || values.category === "") &&
        ((p.price <= Number(values.priceMax) &&
          p.price >= Number(values.priceMin)) ||
          values.priceMin === "" ||
          values.priceMax === "")
      );
    });

    console.log("from filterDataOnApply from app:");
    if (filteredProducts.length > 0) {
      console.log(filteredProducts);
      setFilteredProducts(filteredProducts);
    } else {
      console.log("no data available...!!!");
      setFilteredProducts(filteredProducts);
    }
  };

  const handleReset = (values) => {
    setFilterApplied(0);
  };
  return (
    <div className="App">
      <div className="head_div">Product Catelog</div>
      <FilterPanel
        category={category}
        brand={brand}
        filterCriteria={FilterDataOnApply}
        handleReset={handleReset}
      ></FilterPanel>
      <br></br>
      <br></br>
      {isFilterApplied ? (
        filteredProducts.length === 0 ? (
          <div>
            <h1>No Products Available on filter...!!!</h1>
          </div>
        ) : (
          <DisplayDiv data={filteredProducts}></DisplayDiv>
        )
      ) : products.length > 0 ? (
        <DisplayDiv data={products}></DisplayDiv>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
