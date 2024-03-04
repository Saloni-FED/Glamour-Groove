import { getProducts } from "../../src/api/index"
import { useEffect, useState } from "react";
export const useProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setLoading(false)
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return [products,loading,setProducts];
};
// haaa 