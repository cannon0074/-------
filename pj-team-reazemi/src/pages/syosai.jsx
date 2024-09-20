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
  padding: 30px 49px 0px 48px;
  background-color: #e6e6e6;
`;

const BackColor = styled.div`
  background-color: #e6e6e6;
`;

const BookItem = styled.div`
  width: 500px;
  height: 600px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  padding-top: 34.5px;
  margin-right: 23.25px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ShosaiContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Syosai = () => {
  return (
    <>
      <Header />
      <BackColor>
        <UserInfoContainer>
          <UserInfo />
          <h2>■ 商品詳細</h2>
          <ShosaiContainer>
            <div>
              <BookItem>
                <div>
                  <img
                    src={ItemImg}
                    alt=""
                    style={{ width: 300, height: 399.26 }}
                  />
                </div>
              </BookItem>
              <div>
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
            </div>
          </ShosaiContainer>
        </UserInfoContainer>
      </BackColor>
    </>
  );
};

export default Syosai;
