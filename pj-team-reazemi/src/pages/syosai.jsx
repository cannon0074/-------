import React from "react";
import ReactLogo from "../assets/react.svg";
import CartButton from "../components/CartButton";
import FavoliteButton from "../components/FavoliteButton";
import styled from "styled-components";
import Header from "../components/Header";
import UserInfo from "../components/UserInfo";

// `p`タグをベースにしたスタイル付きコンポーネント
const BookName = styled.p`
  font-size: 36px;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;
`;

const Syosai = () => {
  return (
    <>
      <Header />
      <UserInfo />
      <div>
        <h2>■ 商品詳細</h2>
        <img src={ReactLogo} alt="" />

        <div>
          <div>【書籍名】</div>
          <BookName>
            モダンJavaScriptの基本から始めるReact実践の教科書(最新ReactHooks対応)(Informatics&IDEA)
          </BookName>
          <div>【概要】</div>
          <p>
            【令和最新版】Reactのすべてがこの一冊で網羅できる完全版！これを持たずにReactは語れない！
          </p>
          <div>【価格】</div>
          <p>￥2,860（税込）</p>
        </div>

        <ButtonGroup>
          <CartButton></CartButton>
          <FavoliteButton></FavoliteButton>
        </ButtonGroup>
      </div>
    </>
  );
};

export default Syosai;
