import { Routes, Route, BrowserRouter } from "react-router-dom";
//Routes、Route、Link、BrowserRouterをインポートし、ルーティング

import Test from "./Test";
import Login from "./pages/login";
import Ichiran from "./pages/ichiran";
import Shousai from "./pages/syosai";
import Logout from "./pages/logout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ルーティングの設定 */}
        <Route path="/" element={<Test />} />
        <Route path="login" element={<Login />} />
        <Route path="ichiran" element={<Ichiran />} />
        <Route path="/shousai" element={<Shousai />} />
        <Route path="logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
