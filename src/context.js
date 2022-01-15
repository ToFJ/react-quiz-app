import React, { useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState({ display: false, msg: "" });
  const [max, setMax] = useState(0);
  const [replay, setReplay] = useState("");

  // FUTURE TODO: change diff,category etc., leaderboard(localstorage)

  const fetchData = async () => {
    try {
      const resp = await fetch("https://opentdb.com/api.php?amount=10");
      const data = await resp.json();
      if (data.response_code === 0) {
        setData(data);
      } else {
        setError({ display: true, msg: "Something went wrong, try again!" });
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [replay]);

  return (
    <AppContext.Provider value={{ error, data, isLoading, max, setMax, setReplay }}>{children}</AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { useGlobalContext, AppProvider };
