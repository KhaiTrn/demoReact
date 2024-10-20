import React from "react";
import { useSelector } from "react-redux";

const Total = () => {
  const { banChon, tongSoBanChoi, tongSoBanThang, ketQua } = useSelector(
    (state) => state.xiNgauSlice
  );
  const renderType = (type) => (type ? "Tài" : "Xỉu");
  // khi bấm vào nút play game , sẽ random ngẫu nhiên  3 con xí ngầu mới và sau đó tính tổng kết quả để xem người dùng thắng hay thua, nếu thắng cộng số bàn thắng, tăng tổng số bàn chơi
  return (
    <div className="py-10 text-center text-3xl space-y-3">
      <p className="text-pink-500">
        Bạn chọn: <span>{renderType(banChon)}</span>
      </p>
      <p className="text-blue-500">
        Tổng số bàn chơi: <span>{tongSoBanChoi}</span>
      </p>
      <p className="text-orange-500">
        Tổng số bàn thắng: <span>{tongSoBanThang}</span>
      </p>
      <p className="text-green-600">
        Kết quả: <span>{ketQua}</span>
      </p>
      <button className="py-2 px-5 bg-black text-white rounded-md">
        Play game
      </button>
    </div>
  );
};

export default Total;
