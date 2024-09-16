import React, { useState } from "react";
import styled from "styled-components";
import Vector_0 from "../assets/Vector_0.png";
import Vector_1 from "../assets/Vector_1.png";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 33px 8px 30px;
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: 50px;
  cursor: pointer;
`;

const Img = styled.img`
  margin-right: 8px;
`;

const ButtonText = styled.p`
  margin: 0 auto;
  font-size: 24px;
  color: #000;
  padding-top: 4px;
`;

const API_URL = "https://zpbooks-server.onrender.com/favorite";

const FavoliteButton = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);

    fetch(API_URL, {
      method: "PUT",
      body: JSON.stringify({ userId: "admin", bookId: 1 }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => console.log(json));
  };

  return (
    <>
      <div>
        <Button onClick={handleClick} active={active}>
          {active ? (
            <Img src={Vector_1} alt="ブックマーク済み" />
          ) : (
            <Img src={Vector_0} alt="未ブックマーク" />
          )}
          <ButtonText>ブックマーク</ButtonText>
        </Button>
      </div>
    </>
  );
};

export default FavoliteButton;
