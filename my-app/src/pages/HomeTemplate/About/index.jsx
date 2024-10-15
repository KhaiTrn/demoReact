import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { http } from "../../../services/config";
import ListMovie from "../ListMovie";

export default function About() {
  const { id } = useParams();
  // console.log(id);
  const [movieDetail, setMovieDetail] = useState(); // object
  // console.log(movieDetail);
  // trạng thái didUpdate
  useEffect(() => {
    console.log("huhu");
    http
      .get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
      .then((res) => {
        console.log(res);
        setMovieDetail(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div className="container">
      <h3>About</h3>
      <div className="grid grid-cols-12">
        {movieDetail && (
          <>
            <div className="col-span-4">
              <img className="w-full" src={movieDetail.hinhAnh} alt="" />
            </div>
            <div className="col-span-8">
              <h4 className="text-5xl font-bold">{movieDetail.tenPhim}</h4>
              <p>Đánh giá từ người dùng {movieDetail.danhGia}</p>
              {movieDetail.hot && (
                <div className="bg-red-500 text-white py-2 px-4 rounded-md inline-block">
                  Hot
                </div>
              )}
              {movieDetail.dangChieu ? (
                <div className="bg-blue-500 text-white py-2 px-4 inline-block rounded-md">
                  Phim đang chiếu
                </div>
              ) : (
                <div className="bg-amber-600 text-white py-2 px-4 rounded-md inline-block">
                  Phim ngừng chiếu
                </div>
              )}
            </div>
          </>
        )}
      </div>
      <ListMovie started={0} ended={4} />
      {/* 8-4 */}
      {/* 8 hình ảnh phim */}
      {/* 4 thông tin phim(tên phim - đánh giá - độ hot - đang chiếu) */}
    </div>
  );
}
