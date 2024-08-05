import React from "react";
import Box from "../Componenets/Box/Box";
import TextField from "../Componenets/Fields/TextField/TextField";
import Button from "../Componenets/Button/Button";
import Logo from "../assets/RahnamaLogo.svg";
import Typography from "../Componenets/Typography/Typography";
import useMediaQuery from "../hook/useMediaQuery";
const Register: React.FC = () => {
  const device = useMediaQuery();

  return (
    <Box
      width="w-full"
      padding="py-12 px-16"
      className={`flex items-center justify-center ${
        device == "phone"
          ? "w-full h-screen items-start  justify-between"
          : "max-w-[450px]"
      }`}
    >
      <div className="text-center w-full">logo</div>
      <div className="flex items-center justify-center py-8 gap-4 ">
        <div>ثبت نام</div>
        <div>|</div>
        <div>ورود</div>
      </div>
      <div className="">
        <Typography variant="paragraph" className="text-center font-light  ">
          برای ثبت‌نام کافیه نام کاربری، ایمیل و یک رمز عبور وارد کنید:
        </Typography>
        <div className="mt-6 ">
          <div>
            <TextField placeholder="نام کاربری یا ایمیل" type="text" />
          </div>
          <div className="mt-4">
            <TextField placeholder="رمز عبور" type="password" />
          </div>
          <div className="mt-4">
            <TextField placeholder="رمز عبور" type="password" />
          </div>{" "}
          <div className="mt-4">
            <TextField placeholder="رمز عبور" type="password" />
          </div>
        </div>
        <div className="text-left mt-8">
          <Button primary>ثبت نام</Button>
        </div>
      </div>
    </Box>
  );
};

export default Register;
