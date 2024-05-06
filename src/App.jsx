import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login";
import { Route, Routes } from "react-router-dom";
import Register from "./components/register";
import Dashboard from "./components/dashboard";
import Account from "./components/account";
import NotFoundPage from "./components/notFoundPage";
import DashboardContext from "./components/dashboardContext";
import ForgetPassword from "./components/forgetPassword";
import profileImg from "./assets/profile.jpg";

import { useState } from "react";
function App() {
  const [isOpenA, setIsOpenA] = useState(false);
  const [isOpenB, setIsOpenB] = useState(false);
  const toggleOpenA = () => setIsOpenA(!isOpenA);
  const toggleOpenB = () => setIsOpenB(!isOpenB);
  const changeDefault = () => {
    console.log("default is changed");
  };

  return (
    <>
      <DashboardContext.Provider
        value={{
          isOpenA: isOpenA,
          isOpenB: isOpenB,
          toggleOpenA: toggleOpenA,
          toggleOpenB: toggleOpenB,
          avatarImg: profileImg,
          changeDefault : changeDefault
        }}
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/account" element={<Account />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </DashboardContext.Provider>
    </>
  );
}

export default App;
