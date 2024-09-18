import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return <button onClick={handleLogout}>ログアウト</button>;
}

export default Logout;
