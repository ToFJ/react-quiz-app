import React, { useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState({ display: false, msg: "" });
  const [max, setMax] = useState(0);
  const [replay, setReplay] = useState("");
  const [start, setStart] = useState(false);
  const [options, setOptions] = useState({
    amount: 10,
    category: 9,
    difficulty: "easy",
  });
  const [highScore, setHighScore] = useState(1);
  const [allTime, setAllTime] = useState(1);

  const fetchData = async (amount, category, difficulty) => {
    try {
      const resp = await fetch(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`
      );
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

  const handleStart = () => {
    const { amount, category, difficulty } = options;
    fetchData(amount, category, difficulty);
    setStart(true);
  };
  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setOptions({ ...options, [name]: value });
  };

  useEffect(() => {
    const { amount, category, difficulty } = options;
    fetchData(amount, category, difficulty);
  }, [replay]);

  return (
    <AppContext.Provider
      value={{
        handleStart,
        handleChange,
        error,
        data,
        isLoading,
        max,
        setMax,
        setReplay,
        options,
        start,
        setStart,
        allTime,
        setAllTime,
        highScore,
        setHighScore,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { useGlobalContext, AppProvider };
