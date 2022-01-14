import React, { useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState({ display: false, msg: "" });

  // TODO: api needs index useState for next question (only show one ) + reduce for corret answer amount + if at end of questions array final screen with score + play again

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
  }, []);

  return <AppContext.Provider value={{ error, data, isLoading }}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { useGlobalContext, AppProvider };
