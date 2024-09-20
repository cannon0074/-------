import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LogoutButton = styled.div`
  cursor: pointer;
  margin-right: 20px;
`;

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <>
      <div>
        <LogoutButton onClick={handleLogout}>ログアウト</LogoutButton>
      </div>
    </>
  );
}

export default Logout;
