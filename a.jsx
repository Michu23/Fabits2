
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router";
// import { imageListItemClasses } from "@mui/material";
import StyleContext from "./StyleContext";
import { type } from "@testing-library/user-event/dist/type";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  

  const contextData = {
    
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

