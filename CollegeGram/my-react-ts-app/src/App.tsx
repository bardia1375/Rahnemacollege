import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { AppProvider } from "./Context/AppContext";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgetPassword from "./Pages/ForgetPassword";
import SetNewPassword from "./Pages/SetNewPassword";
import "./index.css"; // Ensure this is imported
import ProtectedRout from "./routes/ProtectedRout";
import Dashboard from "./Pages/Dashboard";

const App: React.FC = () => {
  return (
    <div className="bg-login-background bg-cover bg-center h-screen flex items-center justify-center">
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/set-new-password/:token" element={<SetNewPassword />} />
        <Route element={<ProtectedRout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
