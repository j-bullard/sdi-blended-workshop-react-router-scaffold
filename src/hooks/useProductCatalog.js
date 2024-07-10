import { useEffect } from "react";
import { useState } from "react";

export function useProductCatalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      let result, error;

      try {
        const res = await fetch("/api/v1/products");
        const json = await res.json();
        result = json.wallets;
      } catch (err) {
        error =
          err instanceof Error
            ? err.message
            : "Unable to fetch products from server";
      }

      return { result, error };
    };

    fetchProducts().then(({ result, error }) => {
      // TODO: Handle fetch error for products

      setProducts(result);
      setLoading(false);
    });
  }, []);

  return { products, loading };
}
