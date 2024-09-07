import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
//Routes、Route、Link、BrowserRouterをインポートし、ルーティング

import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
    {/* BrowserRouterで囲みます */}
      <div>
        <h1>React Router Vite デモ</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">ホーム</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* ルーティングの設定 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;

