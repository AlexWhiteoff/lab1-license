import React, { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import ProductsContext from "../context/products-context";

const Product = ({ product }) => {
	const { dispatch } = useContext(ProductsContext);

	return (
		<ListGroup.Item
			action
			variant="secondary"
			key={product.id}
			className="d-flex justify-content-between align-items-center w-50 mx-4"
		>
			<div>{product.name}</div>
			<Button
				variant="danger"
				onClick={() =>
					dispatch({
						type: "REMOVE",
						id: product.id,
					})
				}
			>
				Remove
			</Button>
		</ListGroup.Item>
	);
};

export default Product;
