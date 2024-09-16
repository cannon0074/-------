import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 33px 8px 30px;
  background-color: #f37e1e;
  border: 1px solid #f37e1e;
  border-radius: 50px;
  cursor: pointer;
`;

const ButtonText = styled.p`
  margin: 0 auto;
  font-size: 24px;
  color: #fff;
  padding-top: 4px;
`;

const CartButton = () => {
  const [add, setAdd] = useState(false);

  const handleClick = () => {
    setAdd(!active);
  };

  return (
    <>
      <div>
        <Button onClick={handleClick} active={add}>
          <ButtonText>カートに追加</ButtonText>
        </Button>
      </div>
    </>
  );
};

export default CartButton;
