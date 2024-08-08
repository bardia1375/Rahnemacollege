import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Link, NavLink, useNavigate } from "react-router-dom";
import bardia from "../assets/RahnamaLogo.svg";
import useMediaQuery from "../hook/useMediaQuery";
import { useAuth } from "../hook/useAuth";
import Box from "../Componenets/Box/Box";
import Typography from "../Componenets/Typography/Typography";
import TextField from "../Componenets/Fields/TextField/TextField";
import Button from "../Componenets/Button/Button";
import { useMutation } from "react-query";

// Custom validation function for email or username
const emailOrUsername = z
  .string()
  .min(1, "نام کاربری یا ایمیل ضروری است")
  .refine(
    (value) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(value) || /^[a-zA-Z0-9_]+$/.test(value);
    },
    {
      message: "باید یک ایمیل یا نام کاربری معتبر وارد کنید",
    }
  );
const schema = z
  .object({
    usernameOrEmail: emailOrUsername,
    password: z.string().min(8, "رمز عبور باید حداقل ۸ کاراکتر داشته باشد"),
    confirmPassword: z
      .string()
      .min(8, "تایید رمز عبور ضروری و حداقل ۸ کاراکتر است"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمزهای عبور مطابقت ندارند!",
    path: ["confirmPassword"],
  });

type FormValues = {
  usernameOrEmail: string;
  password: string;
  confirmPassword: string;
};

const Register: React.FC = () => {
  const navigate = useNavigate();

  const device = useMediaQuery();
  const {
    control,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
  const { registerUser } = useAuth();

  // Define the mutation for register
  const registerMutation = useMutation(
    async (data: {
      usernameOrEmail: string;
      password: string;
      confirmPassword: string;
    }) => registerUser(data),
    {
      onSuccess: () => {
        navigate("/login");
      },
      onError: (error) => {
        console.error("Registration failed", error);
        navigate("/login");
      },
    }
  );

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    registerMutation.mutate(data);
  };

  return (
    <Box
      width="w-full"
      padding="py-12 px-16"
      className={`flex items-center justify-center ${
        device === "phone"
          ? "w-full h-screen items-start justify-between rounded-none py-32"
          : "max-w-[450px]"
      }`}
    >
      <div className="flex w-full items-center justify-center">
        <img src={bardia} className="" alt="Rahnama Logo" />
      </div>
      <div className="flex items-center justify-center py-8 gap-4">
        <NavLink to="/login" activeClassName="font-bold">
          <Typography variant="h3">ورود</Typography>
        </NavLink>
        <div>|</div>
        <NavLink to="/register" activeClassName="font-bold">
          <Typography variant="h3">ثبت نام</Typography>
        </NavLink>
      </div>
      <div className="">
        <Typography variant="paragraph" className="text-center font-light">
          برای ثبت‌نام کافیه نام کاربری، ایمیل و یک رمز عبور وارد کنید:
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div>
            <TextField
              control={control}
              name="usernameOrEmail"
              type="text"
              placeholder="نام کاربری یا ایمیل"
              prefixIcon={<FaUser className="text-gray-400" />}
              // error={errors.usernameOrEmail?.message}
            />
          </div>
          <div className="mt-4">
            <TextField
              control={control}
              name="password"
              type="password"
              placeholder="رمز عبور"
              prefixIcon={<FaLock className="text-gray-400" />}
              // error={errors.password?.message}
            />
          </div>
          <div className="mt-4">
            <TextField
              control={control}
              name="confirmPassword"
              type="password"
              placeholder="تایید رمز عبور"
              prefixIcon={<FaLock className="text-gray-400" />}
              // error={errors.confirmPassword?.message}
            />
          </div>
          <div className="text-left mt-8">
            <Button primary type="submit" disabled={registerMutation.isLoading}>
              {registerMutation.isLoading ? "در حال ثبت‌نام..." : "ثبت نام"}
            </Button>
          </div>
        </form>
      </div>
    </Box>
  );
};

export default Register;
