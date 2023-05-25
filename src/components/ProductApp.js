import React, { useEffect, useReducer } from "react";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import productsReducer from "../reducers/products";
import ProductsContext from "../context/products-context";

const ProductApp = () => {
	const [products, dispatch] = useReducer(productsReducer, []);

	useEffect(() => {
		const productData = JSON.parse(localStorage.getItem("products"));
		if (productData) dispatch({ type: "POPULATE", products: productData });
	}, []);

	useEffect(() => {
		localStorage.setItem("products", JSON.stringify(products));
	}, [products]);

	return (
		<>
			<ProductsContext.Provider value={{ products, dispatch }}>
				<ProductForm />
				<ProductList />
			</ProductsContext.Provider>
		</>
	);
};

export default ProductApp;
