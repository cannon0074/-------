import { Routes, Route, BrowserRouter } from "react-router-dom";
//Routes、Route、Link、BrowserRouterをインポートし、ルーティング

import Test from "./Test";
import Login from "./pages/login";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ルーティングの設定 */}
        <Route path="/" element={<Test />} />
        <Route path="login" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
