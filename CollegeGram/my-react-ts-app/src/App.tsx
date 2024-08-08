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
    <div className="bg-login-background bg-cover bg-center">
      <div className="bg-black bg-opacity-20 flex items-center justify-center h-screen">
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/set-new-password/:token" element={<SetNewPassword />} />
          <Route element={<ProtectedRout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
