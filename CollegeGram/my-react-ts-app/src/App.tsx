import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import { AppProvider } from "./Context/AppContext";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgetPassword from "./Pages/ForgetPassword";
import SetNewPassword from "./Pages/SetNewPassword";

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        {" "}
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav> */}
        <div className="border-2 h-screen	 flex items-center justify-center" >
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
