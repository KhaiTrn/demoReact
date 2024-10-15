import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// một state dùng để quản lý dữ liệu từ BE
//useEffect dùng để xử lí API

export default function ListMovie(props) {
  const [listMovie, setListMovie] = useState([]); // mảng (Array)
  const navigate = useNavigate();
  console.log(props);
  console.log(listMovie);
  // Thực thi sau khi giao diện component hiển thị trên trang web
  // thực thi sau khi component hiển thị trên trang web
  // UseEffect này đang chạy quá trình mounting và ở đây là trạng thái của component didmount
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      headers: {
        TokenCyberSoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3NiIsIkhldEhhblN0cmluZyI6IjIyLzEwLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0NTI4MDAwMDAwMCIsIm5iZiI6MTcxNzA4ODQwMCwiZXhwIjoxNzQ1NDI3NjAwfQ.MKXnw_KZnMMPmfQdPKUoC3n9-R88URCmtEP0QDg9hTw",
      },
    })
      .then((res) => {
        console.log(res);
        // const dataMovie =
        //   props.started && props.ended
        //     ? res.data.content.slide(props.started, props.ended)
        //     : res.data.content;

        const dataMovie = res.data.content.slice(props.started, props.ended);
        console.log(dataMovie);
        setListMovie(dataMovie);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function renderLayout() {
    console.log("tôi là giao diện component của listMovie");
    return listMovie.map((phim, index) => (
      <div className="space-y-2">
        <img className="w-full" src={phim.hinhAnh} alt="" />
        <h3>{phim.tenPhim}</h3>
        <button
          onClick={() => {
            // chuyển hướng người dùng thông qua navigate react router dom
            navigate(`/about/${phim.maPhim}`);
          }}
          className="inline-block w-full py-2 px-5 bg-black text-white rounded-md"
        >
          Mua Ngay
        </button>
      </div>
    ));
  }
  return (
    <div>
      <div className="container">
        <h3>ListMovie</h3>
        <div className="grid grid-cols-4 mt-5 gap-5">{renderLayout()}</div>
      </div>
    </div>
  );
}
