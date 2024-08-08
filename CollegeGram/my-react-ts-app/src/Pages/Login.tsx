import React from "react";
import useMediaQuery from "../hook/useMediaQuery";
import { FaUser, FaLock } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import bardia from "../assets/RahnamaLogo.svg";
import Box from "../Componenets/Box/Box";
import Typography from "../Componenets/Typography/Typography";
import TextField from "../Componenets/Fields/TextField/TextField";
import Button from "../Componenets/Button/Button";
import { useAuth } from "../hook/useAuth";
import { Link, NavLink } from "react-router-dom";
import { useMutation } from "react-query";

// Custom validation function for email or username
const emailOrUsername = z
  .string()
  .min(1, "نام کاربری یا ایمیل ضروری است")
  .refine(
    (value) => {
      // Simple email regex pattern
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // Check if value is an email or a username (only contains letters, numbers, underscores)
      return emailPattern.test(value) || /^[a-zA-Z0-9_]+$/.test(value);
    },
    {
      message: "باید یک ایمیل یا نام کاربری معتبر وارد کنید",
    }
  );

const schema = z.object({
  usernameOrEmail: emailOrUsername,
  password: z.string().min(1, "رمز عبور ضروری است"),
  rememberMe: z.boolean().optional(),
});

type FormValues = {
  usernameOrEmail: string;
  password: string;
  rememberMe?: boolean;
};

const Login: React.FC = () => {
  const device = useMediaQuery();
  const {
    control,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
  const { login } = useAuth();

  // Define the mutation for login
  const mutation = useMutation((data: FormValues) => login(data), {
    onSuccess: () => {
      // Handle success (e.g., redirect to a dashboard)
      console.log("Login successful");
    },
    onError: (error: any) => {
      // Handle error (e.g., show error message)
      console.error("Login failed", error);
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    mutation.mutate(data);
  };

  return (
    <Box
      width="w-2/4"
      padding="py-8 px-12"
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
      <div>
        <Typography variant="paragraph" className="text-right font-light">
          به کالج‌گرام خوش آمدید. برای ورود کافیه نام کاربری/ایمیل و رمز عبور
          خود‌تون رو وارد کنید
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div>
            <TextField
              control={control}
              name="usernameOrEmail"
              type="text"
              placeholder="نام کاربری یا ایمیل"
              rules={{ required: "نام کاربری یا ایمیل ضروری است" }}
              prefixIcon={<FaUser className="text-gray-400" />}
              error={errors.usernameOrEmail?.message}
            />
          </div>
          <div className="mt-4">
            <TextField
              control={control}
              name="password"
              type="password"
              placeholder="رمز عبور"
              prefixIcon={<FaLock className="text-gray-400" />}
              error={errors.password?.message}
            />
          </div>
          <div className="mt-4 flex items-center gap-2">
            <input
              type="checkbox"
              {...control.register("rememberMe")}
              id="rememberMe"
              className="mr-2 bg-white"
            />
            <label htmlFor="rememberMe" className="text-right font-light">
              من را به خاطر بسپار
            </label>
          </div>

          <div className="text-left mt-4">
            <Button primary type="submit" disabled={mutation.isLoading}>
              {mutation.isLoading ? "در حال ورود..." : "ورود"}
            </Button>
          </div>
        </form>
      </div>
      <div className="text-right mt-6">
        <Link to={"/ForgetPassword"}>
          <Typography
            color="text-secondary"
            variant="paragraph"
            className="text-right mt-4 font-light"
          >
            فراموشی رمز عبور
          </Typography>
        </Link>
        <Link to={"/Register"}>
          <Typography
            color="text-secondary"
            variant="paragraph"
            className="text-right font-light"
          >
            ثبت نام در کالج‌گرام
          </Typography>
        </Link>
      </div>
    </Box>
  );
};

export default Login;
