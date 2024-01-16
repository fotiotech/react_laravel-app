import React, { useEffect } from "react";

const FetchData = (endpoint: string, setInitialState: () => void) => {
  useEffect(() => {
    try {
      fetch(`/${endpoint}`)
        .then((data) => data.json())
        .then((data) => {
          setInitialState(data);
        });
    } catch {
      (error: any) => {
        console.log(error);
      };
    }
  }, []);
  return;
};

export default FetchData;
