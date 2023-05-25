import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import Product from "./Product";
import ProductsContext from "../context/products-context";

const ProductList = () => {
	const { products } = useContext(ProductsContext);

	return (
		<ListGroup>
			{products.map((product) => (
				<Product key={product.id} product={product} />
			))}
		</ListGroup>
	);
};

export default ProductList;
