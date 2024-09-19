import React from "react";
import { Link } from "react-router-dom";
import ReactLogo from "../assets/react.svg";
import Header from "../components/Header";
import UserInfo from "../components/UserInfo";

const Ichiran = () => {
  return (
    <>
      <Header />
      <UserInfo />
      <div>
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
        <Link to="/shousai">
          <div>
            <img src={ReactLogo} alt="" />
            <p>モダンJavaScriptの基本から始めるReact実践の教科書...</p>
            <p>価格：￥2,860（税込）</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Ichiran;
