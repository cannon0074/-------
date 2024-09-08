import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  padding: 10px 0px;
  background-color: #ffffff;
  color: #000000;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  .icon {
  }
`;

export const FavoliteButton = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <div>
        <Button onClick={handleClick} active={active}>
          <span className="icon">{active ? "★" : "☆"}</span>ブックマーク
        </Button>
      </div>
    </>
  );
};
