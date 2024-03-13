/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const initialLocation = {
  coords: {
    lat: null,
    long: null,
  },
  error: null,
};

export const LocationContext = createContext({
  location: initialLocation,
  setLocation() {},
});

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(initialLocation);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              coords: {
                lat: position.coords.latitude,
                long: position.coords.longitude,
              },
              error: null,
            });
          },
          (error) => {
            setLocation({
              coords: {
                lat: null,
                long: null,
              },
              error: error.message,
            });
          }
        );
      } else {
        setLocation({
          coords: {
            lat: null,
            long: null,
          },
          error: "Geolocation is not supported by your browser.",
        });
      }
    };
    getLocation();
  }, []);

  const locationCtx = {
    location,
    setLocation,
  };

  return (
    <LocationContext.Provider value={locationCtx}>
      {children}
    </LocationContext.Provider>
  );
};
