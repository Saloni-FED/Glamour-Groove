import React from "react";
import { getProducts } from "../../src/api/index"
import { useEffect, useState } from "react";
export const useProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return [products,setProducts];
};
// haaa 