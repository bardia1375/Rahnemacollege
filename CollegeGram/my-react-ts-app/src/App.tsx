import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { AppProvider } from "./Context/AppContext";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgetPassword from "./Pages/ForgetPassword";
import SetNewPassword from "./Pages/SetNewPassword";
import "./index.css"; // Ensure this is imported

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <div
          className="bg-login-background bg-cover bg-center h-screen flex items-center justify-center"
         
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
