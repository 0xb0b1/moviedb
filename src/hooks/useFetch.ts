import { useEffect, useState } from "react";

export function useFetch<T = unknown>(url: string, options = {}) {
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState<T | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(async (response) => {
        const json = await response.json();
        setValue(json);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return { isLoading, value, error };
}
