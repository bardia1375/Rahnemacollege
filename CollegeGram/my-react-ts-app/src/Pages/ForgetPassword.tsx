import React from "react";
import Box from "../Componenets/Box/Box";
import TextField from "../Componenets/Fields/TextField/TextField";
import Button from "../Componenets/Button/Button";
import Logo from "../assets/RahnamaLogo.svg";
import Typography from "../Componenets/Typography/Typography";
import useMediaQuery from "../hook/useMediaQuery";
import { FaUser } from "react-icons/fa";
import bardia from "../assets/RahnamaLogo.svg";

const ForgetPassword: React.FC = () => {
  const device = useMediaQuery();

  return (
    <Box
      width="w-full"
      padding="py-12 px-16"
      className={`flex items-center justify-center rounded-none py-32${
        device == "phone"
          ? "w-full h-screen items-start  justify-between"
          : "max-w-[450px]"
      }`}
    >
      <div className="flex w-full items-center justify-center">
        <img src={bardia} className="" />
      </div>{" "}
      <div className="flex items-center justify-center py-8 gap-4 ">
        بازیابی رمز عبور
      </div>
      <div className="">
        <Typography variant="paragraph" className="text-center font-light  ">
          لطفاً نام‌ کاربری یا ایمیل خودتون رو وارد کنید:{" "}
        </Typography>
        <div className="mt-6 ">
          <div>
            <TextField
              prefixIcon={<FaUser className="text-gray-400" />}
              placeholder="نام کاربری یا ایمیل"
              type="text"
            />
          </div>
        </div>
        <div className="flex justify-between gap-4 text-left mt-8 ">
          <Button>انصراف </Button>
          <Button primary>ارسال لینک بازیابی رمز عبور </Button>
        </div>
      </div>
    </Box>
  );
};

export default ForgetPassword;
