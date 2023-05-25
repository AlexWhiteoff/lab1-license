import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import ProductsContext from "../context/products-context";


const ProductForm = () => {
    const {dispatch} = useContext(ProductsContext);
	const [name, setName] = useState("");

	const addProduct = (e) => {
		e.preventDefault();
		if (name !== "") {
			dispatch({
				type: "ADD",
				name,
			});
			setName("");
			document.getElementById("product_input").value = "";
		}
	};

	return (
		<>
			<Form className="App" onSubmit={(e) => addProduct(e)}>
				<Form.Group className="mb-3 w-50 d-flex justify-content-around align-items-center">
					<Form.Control
						id="product_input"
						className="my-3 w-75"
						type="text"
						placeholder="Enter product"
						onChange={(e) => setName(e.target.value)}
					/>
					<Button variant="primary" type="submit" className="">
						Add
					</Button>
				</Form.Group>
			</Form>
		</>
	);
};

export default ProductForm;
