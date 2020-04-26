import { API_URL } from "../../config";

import { useState, useEffect } from "react";

export const useHttpGet = (methodName) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);

  const url = `${API_URL}/${methodName}`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        debugger;
        setIsLoading(false);
        setFetchedData(data);
      })
      .catch((err) => {
        console.log(err);

        setIsLoading(false);
        setFetchedData([]);
      });
  }, []);

  return [isLoading, fetchedData];
};
