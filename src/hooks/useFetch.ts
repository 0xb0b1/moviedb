import { useEffect, useState } from "react";

export const useFetch = (url: RequestInfo, options = {}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, options)
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
};
