import { useEffect, useState } from "react";

export function useProduct(id) {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async (id) => {
      let result, error;

      try {
        const res = await fetch(`/api/v1/products/${id}`);
        const json = await res.json();
        result = json;
      } catch (err) {
        error =
          err instanceof Error
            ? err.message
            : "Unable to fetch product from server";
      }

      return { result, error };
    };

    fetchProduct(id).then(({ result, error }) => {
      // TODO: Handle fetch error

      setTimeout(() => {
        setProduct(result);
        setLoading(false);
      }, 0);
    });
  }, [id]);

  return { product, loading };
}
