import axios from "axios";
import React, { useEffect } from "react";

const FetchData = (endpoint: string, setInitialState: (data: []) => void) => {
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

export function FetchDataAxios(
  name: string,
  endpoint: string,
  setInitialState: (data: []) => void
) {
  useEffect(() => {
    try {
      axios.get(`http://localhost:3000/${name}/${endpoint}`).then((response) => {
        setInitialState(response);
      });
    } catch {
      (error: any) => {
        console.log(error);
      };
    }
  }, []);

}

// const postData = async ( api: string, endpoint: string, setInitialState: (data: []) => void) => {
//   useEffect(() => {
//     const options = {
//       method: 'POST',
//       url: `localhost:3000/${api}/${endpoint}`,
//       body: {

//       }
//     }
//     try {
//       fetch(`/${endpoint}`)
//         .then((data) => data.json())
//         .then((data) => {
//           setInitialState(data);
//         });
//     } catch {
//       (error: any) => {
//         console.log(error);
//       };
//     }
//   }, []);
//   return;
// };

export default FetchData;
