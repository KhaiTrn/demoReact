import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import hinhAnh1 from "./assets/img/img1.jpeg";
import BaiTapRenderDienThoai from "./components/BaiTap/BaiTapRenderDienThoai";
import DemoState from "./components/DemoState/DemoState";
import { DatePicker } from "antd";
import BaiTapRenderXe from "./components/BaiTapRenderXe/BaiTapRenderXe";
import { Route, Routes } from "react-router-dom";
import HomeTemplate from "./pages/HomeTemplate";
import AdminTemplate from "./pages/AdminTemplate";
import Home from "./pages/HomeTemplate/Home";
import ListMovie from "./pages/HomeTemplate/ListMovie";
import About from "./pages/HomeTemplate/About";
import Dashboard from "./pages/AdminTemplate/Dashboard";
import AddUser from "./pages/AdminTemplate/AddUser";
import { renderRoutes } from "./Routes";
function App() {
  return (
    <>
      <Routes>
        {/* Route định danh các tuyến đường(path) */}
        {/* <Route
          path="/dtdd"
          element={
            <div className="h-screen flex items-center justify-center text-4xl text-red-500">
              Hello tôi là trang dtdd dây
            </div>
          }
        />
        <Route path="/" element={<DemoState />} /> */}
        {/* Định tuyến trang HomeTemplate -localhost:5173 */}
        {/* <Route path="" element={<HomeTemplate />}> */}
        {/* Định tuyến trang Home, About,ListMovie */}
        {/* <Route path="" element={<Home />} /> */}
        {/* <Route path="about" element={<About />} /> */}
        {/* <Route path="list-movie" element={<ListMovie />} /> */}
        {/* </Route> */}
        {/* Định tuyến trang AdminTemplate - localhost:5173/admin */}
        {/* <Route path="admin" element={<AdminTemplate />}> */}
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        {/* <Route path="add-user" element={<AddUser />} /> */}
        {/* </Route> */}
        {renderRoutes()}
      </Routes>
    </>
  );
}

export default App;
