import React from "react";
import ItemImg from "../assets/react-1-768x768 1.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BookItem = styled.div`
  width: 250px;
  height: 350px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  padding-top: 34.5px;
  margin-right: 23.25px;
  margin-bottom: 20px;
`;

const Item = () => {
  return (
    <>
      <BookItem>
        <Link to="/shousai">
          <div>
            <img
              src={ItemImg}
              alt=""
              style={{ width: "135.25px", height: "180px" }}
            />
            <p>モダンJavaScriptの基本から始めるReact実践の教科書...</p>
            <p style={{ color: "red" }}>価格：￥2,860（税込）</p>
          </div>
        </Link>
      </BookItem>
    </>
  );
};

export default Item;
