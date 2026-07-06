import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) throw new Error("Error al cargar la API");
        const json = await res.json();
        setData(json); // Ghibli entrega un array directo
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [url]);

  return { data, loading, error };
}
