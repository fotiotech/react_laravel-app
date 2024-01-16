import { useEffect } from "react";

const FetchData = (endpoint, setInitialState) => {
  useEffect(() => {
    try {
      fetch(`/${endpoint}`)
        .then((data) => data.json())
        .then((data) => {
          setInitialState(data);
        });
    } catch {
      (error) => {
        console.log(error);
      };
    }
  });
  return;
};

export default FetchData;
