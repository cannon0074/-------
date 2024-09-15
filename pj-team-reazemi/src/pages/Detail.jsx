import React from "react";
import styled from "styled-components";

// `p`タグをベースにしたスタイル付きコンポーネント
const BookName = styled.p`
  font-size: 36px;
`;

function Detail() {
  return (
    <div>
      <BookName>
        モダンJavaScriptの基本から始めるReact実践の教科書(最新ReactHooks対応)(Informatics&IDEA)
      </BookName>
    </div>
  );
}

export default Detail;
