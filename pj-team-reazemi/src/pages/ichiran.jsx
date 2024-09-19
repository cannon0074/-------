import React from "react";
import { Link } from "react-router-dom";
// import ReactLogo from "../assets/react.svg";
import Header from "../components/Header";
import UserInfo from "../components/UserInfo";
import styled from "styled-components";
import Item from "../components/Item";

const BackColor = styled.div`
  background-color: #e6e6e6;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Ichiran = () => {
  return (
    <>
      <Header />
      <BackColor>
        <div>
          <UserInfo />
          <h1>書籍一覧</h1>
          <nav>
            <ul>
              <li>
                <a href="">React</a>
              </li>
              <li>
                <a href="">Laravel</a>
              </li>
              <li>
                <a href="">Node.js</a>
              </li>
              <li>
                <a href="">MySQL</a>
              </li>
            </ul>
          </nav>
          <ItemContainer>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </ItemContainer>
          {/* <BookItem>
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
          </BookItem> */}
        </div>
      </BackColor>
    </>
  );
};

export default Ichiran;
