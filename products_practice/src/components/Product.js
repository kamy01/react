import React from "react";

function Product(props) {
	return (
		<div style={{display: !props.product.price && "none"}}>
			<h3>Name : {props.product.name}</h3>
            <h3>Price : {props.product.price.toLocaleString("en-US", { style: "currency", currency: "EUR" })}</h3>
            <h3>Description : {props.product.description}</h3>
		</div>
	);
}

export default Product;