import React from "react";
import { Input } from "antd";
import InputCustom from "../../../components/Input/InputCustom";
import { Select } from "antd";
import SelectCustom from "../../../components/Select/SelectCustom";
import ButtonCustom from "../../../components/ButtonCustom/ButtonCustom";
const DemoForm = () => {
  // MSNV, họ tên, email, sđt, chức vụ, tiền lương
  // Giám đốc, trưởng phòng, hậu cần
  return (
    <div>
      <h2 className="text-4xl font-medium">Bài tập thực hành Fokmik và Yup</h2>
      <div className="container">
        <form action="">
          <div className="grid grid-cols-2">
            <InputCustom
              labelContent="Mã số nhân viên"
              placeholder="Vui lòng nhập mã nhân viên"
              iconPrefix={<i class="fa-regular fa-id-card"></i>}
            />
            <InputCustom
              labelContent="Họ tên"
              placeholder="Vui lòng nhập họ tên"
              iconPrefix={<i class="fa-regular fa-user"></i>}
            />
            <InputCustom
              labelContent="Email"
              placeholder="Vui lòng nhập Email"
              iconPrefix={<i class="fa-regular fa-envelope"></i>}
            />
            <InputCustom
              labelContent="Số điện thoại"
              placeholder="Vui lòng nhập Số điện thoại"
              iconPrefix={<i class="fa-solid fa-phone"></i>}
            />
            <div>
              <SelectCustom
                options={[
                  {
                    label: "Trưởng Phòng",
                    value: "TP",
                  },
                  {
                    label: "Giám Đốc",
                    value: "GD",
                  },
                  {
                    label: "Hậu Cần",
                    value: "HC",
                  },
                ]}
              />
              <InputCustom
                labelContent="Tiền lương"
                placeholder="Vui lòng nhập tiền lương"
                iconPrefix={<i class="fa-solid fa-sack-dollar"></i>}
              />
              <div className="space-x-3 mt-3">
                <ButtonCustom
                  type="submit"
                  buttonContent="Thêm nhân viên"
                  className="bg-black text-white"
                />
                <ButtonCustom
                  buttonContent="Reset Form"
                  className="bg-red-500 text-white"
                />
                <ButtonCustom
                  buttonContent="Cập nhật dữ liệu"
                  className="bg-yellow-500 text-white"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DemoForm;
