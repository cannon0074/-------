import React from "react";
import ReactLogo from "../assets/react.svg";
import CartButton from "../components/CartButton";
import FavoliteButton from "../components/FavoliteButton";
import styled from "styled-components";
import Header from "../components/Header";
import UserInfo from "../components/UserInfo";
import ItemImg from "../assets/react-1-768x768 1.png";

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

const UserInfoContainer = styled.div`
  padding: 30px 49px 165px 48px;
  background-color: #e6e6e6;
`;

const BackColor = styled.div`
  background-color: #e6e6e6;
`;

const BookItem = styled.div`
  width: 500px;
  height: 600px;
  background-color: #ffffff;
  border-radius: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ShosaiContainer = styled.div`
  display: flex;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
`;

const Syosai = () => {
  return (
    <>
      <Header />
      <BackColor>
        <UserInfoContainer>
          <UserInfo />
          <h2>■ 商品詳細</h2>
          <div>
            <ShosaiContainer>
              <BookItem>
                <div>
                  <img
                    src={ItemImg}
                    alt=""
                    style={{ width: "300px", height: "399.26px" }}
                  />
                </div>
              </BookItem>
              <div style={{ width: "763px", paddingLeft: "32px" }}>
                <div>
                  <div>
                    <Title>[ 書籍名 ]</Title>
                    <BookName>
                      モダンJavaScriptの基本から始めるReact実践の教科書(最新ReactHooks対応)(Informatics&IDEA)
                    </BookName>
                  </div>
                  <div style={{ paddingTop: "32px" }}>
                    <Title>[ 概要 ]</Title>
                    <p style={{ fontSize: "24px" }}>
                      【令和最新版】Reactのすべてがこの一冊で網羅できる完全版！これを持たずにReactは語れない！
                    </p>
                  </div>
                  <div style={{ paddingTop: "32px" }}>
                    <Title>[ 価格 ]</Title>
                    <p style={{ color: "#FF0D0D", fontSize: "36px" }}>
                      ￥2,860（税込）
                    </p>
                  </div>
                </div>

                <ButtonGroup style={{ paddingTop: "32px" }}>
                  <CartButton></CartButton>
                  <FavoliteButton></FavoliteButton>
                </ButtonGroup>
              </div>
            </ShosaiContainer>
          </div>
        </UserInfoContainer>
      </BackColor>
    </>
  );
};

export default Syosai;
