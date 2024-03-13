// import axios from "axios";
// import { useEffect, useState } from "react";

// const API_KEY = "mw5J0nT3KCCdbm5QJNimnn4AWLnLpD9A";
// const api = axios.create({
//   baseURL: "https://api.tomorrow.io",
// });

// const fetchData = async (endpoint) => {
//   return new Promise((resolve, reject) => {
//     (async function () {
//       try {
//         const response = await api.get(endpoint);
//         resolve(response.data);
//       } catch (error) {
//         reject(error);
//       }
//     })();
//   });
// };

// const getValueBaseOnType = (location) => {
//   // city name
//   if (typeof location === "string") return location;
//   // city coordinates
//   if (
//     typeof location === "object" &&
//     location !== null &&
//     !Array.isArray(location)
//   )
//     return `${location.lat}, ${location.long}`;

//   return "ho chi minh city"; // default value
// };

// const initialData = { current: null, daily: null, hourly: null };

// export default function useHttp(location) {
//   const [data, setData] = useState(initialData);
//   const [error, setError] = useState();

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       if (!location.lat || !location.long) return null;

//       const loc = getValueBaseOnType(location);
//       const endpoints = [
//         `/v4/weather/realtime?location=${loc}&apikey=${API_KEY}`,
//         `/v4/weather/forecast?location=${loc}&timesteps=1d&apikey=${API_KEY}`,
//         `/v4/weather/forecast?location=${loc}&timesteps=1h&apikey=${API_KEY}`,
//       ];

//       const dataArr = [];
//       for (const endpoint of endpoints) {
//         try {
//           // const resData = await fetchDataWithDelay(endpoint, 1000);
//           const resData = await fetchData(endpoint);

//           console.log("resData: ", resData);

//           dataArr.push(resData);
//         } catch (error) {
//           if (error.response) {
//             console.log("error: ", error.response.data.type);
//             setError(error.response.data.type);
//           } else {
//             console.log(error);
//             setError(error);
//           }
//         }
//       }

//       return dataArr;
//     };

//     const fetchDataAndUpdateState = async () => {
//       const resData = await fetchWeatherData(location);

//       if (resData === null) {
//         setError("Something went wrong with location data. Please try again!");
//       } else if (resData.includes(null || undefined || resData.message)) {
//         setError("Could not fetch weather data.");
//       } else {
//         setData({
//           current: resData[0],
//           daily: resData[1],
//           hourly: resData[2],
//         });
//         setError(null);
//       }
//     };

//     fetchDataAndUpdateState();
//   }, [location]);

//   return {
//     data,
//     error,
//   };
// }

import axios from "axios";
import { useCallback, useState } from "react";

const API_KEY = "mw5J0nT3KCCdbm5QJNimnn4AWLnLpD9A";
const api = axios.create({
  baseURL: "https://api.tomorrow.io",
});

const fetchData = async (endpoint) => {
  return new Promise((resolve, reject) => {
    (async function () {
      try {
        const response = await api.get(endpoint);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    })();
  });
};

const initialData = { current: null, daily: null, hourly: null };

export default function useHttp(coords) {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeatherData = useCallback(async () => {
    if (!coords.lat || !coords.long) return null;

    setIsLoading(true);

    const endpoints = [
      `/v4/weather/realtime?location=${coords.lat}, ${coords.long}&apikey=${API_KEY}`,
      `/v4/weather/forecast?location=${coords.lat}, ${coords.long}&timesteps=1d&apikey=${API_KEY}`,
      `/v4/weather/forecast?location=${coords.lat}, ${coords.long}&timesteps=1h&apikey=${API_KEY}`,
    ];

    const dataArr = [];
    for (const endpoint of endpoints) {
      try {
        // const resData = await fetchDataWithDelay(endpoint, 1000);
        const resData = await fetchData(endpoint);

        dataArr.push(resData);
      } catch (error) {
        if (error.response) {
          setError(error.response.data.type);
        } else {
          setError(error);
        }
      }
    }

    setIsLoading(false);

    return dataArr;
  }, [coords]);

  const fetchDataAndUpdateState = useCallback(async () => {
    const resData = await fetchWeatherData(coords, setError);

    if (resData === null) {
      setError("Please wait a second...");
    } else if (resData.includes(null || undefined || resData.message)) {
      setError("Could not fetch weather data.");
    } else {
      setData({
        current: resData[0],
        daily: resData[1],
        hourly: resData[2],
      });
      setError(null);
    }
  }, [coords, fetchWeatherData]);

  return {
    data,
    error,
    fetchDataAndUpdateState,
    isLoading,
    setIsLoading,
  };
}
