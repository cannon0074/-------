import React from "react";
import ReactLogo from "../assets/react.svg";
import FavoliteButton from "../components/FavoliteButton";
import styled from "styled-components";

// `p`タグをベースにしたスタイル付きコンポーネント
const BookName = styled.p`
  font-size: 36px;
`;

const Syosai = () => {
  return (
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

      <div>
        <button>カートに追加</button>
        <FavoliteButton></FavoliteButton>
      </div>
    </div>
  );
};

export default Syosai;
