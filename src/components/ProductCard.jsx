import "./ProductCard.css";

function ProductCard(props) {
  return (
    <div className="product_div">
      <label>Name: {props.name}</label>
      <br></br>
      <label>Price:{props.price}</label>
      <br></br>
      <label>Brand:{props.brand}</label>
      <br></br>
      <label>Category:{props.category}</label>
    </div>
  );
}

export default ProductCard;
