import ProductCard from "./ProductCard";
import "./DisplayDiv.css";
function DisplayDiv(props) {
  let products = props.data;
  // console.log("from display", props.data);
  return (
    <div className="display_div">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          name={p.productName}
          price={p.price}
          brand={p.brand}
          category={p.category}
        ></ProductCard>
      ))}
    </div>
  );
}

export default DisplayDiv;
