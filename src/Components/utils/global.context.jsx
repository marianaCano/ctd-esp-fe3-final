import React, { createContext, useReducer, useContext } from "react";

// Estado inicial
const initialState = {
  theme: "light",
  dentists: [],
  favorites: [],
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "ADD_TO_FAVS":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FROM_FAVS":
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== action.payload),
      };
    default:
      return state;
  }
};

// Contexto
export const GlobalContext = createContext();

// Proveedor del contexto
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook para acceder al tema
export const useTheme = () => {
  const { state } = useContext(GlobalContext);
  return state.theme;
};



