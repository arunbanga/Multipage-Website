import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./Reducer";
const AppContext = createContext();
const API = "https://thapareactapi.up.railway.app/";
const intialState = {
  name: "",
  image: "",
  services: [],
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "WEB DESIGNER",
        image:
          "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2ViJTIwZGVzaWduZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      },
    });
  };
  const updateAboutPage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "FRONTEND DEVELOPER",
        image:
          "https://media.istockphoto.com/photos/top-view-of-laptop-with-text-html5-picture-id1355140477?s=612x612",
      },
    });
  };

  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_SERVICES", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getServices(API);
  }, []);
  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
