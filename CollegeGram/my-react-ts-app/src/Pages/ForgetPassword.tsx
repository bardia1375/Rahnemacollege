import React from "react";
import useMediaQuery from "../hook/useMediaQuery";
import { FaUser } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import bardia from "../assets/RahnamaLogo.svg";
import Box from "../Componenets/Box/Box";
import Typography from "../Componenets/Typography/Typography";
import TextField from "../Componenets/Fields/TextField/TextField";
import Button from "../Componenets/Button/Button";
import { useMutation } from "react-query";
import axios from "axios";
import serverApi from "../api/baseUrl";
import { useNavigate } from "react-router-dom";

// Custom validation schema
const schema = z.object({
  usernameOrEmail: z
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
    ),
});

type FormValues = {
  usernameOrEmail: string;
};

const ForgetPassword: React.FC = () => {
  const navigate = useNavigate();

  const device = useMediaQuery();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  // Define the mutation for password recovery
  const mutation = useMutation((data: FormValues) =>
    serverApi.post("/api/forgot-password", data)
  );

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    mutation.mutate(data);
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
        <img src={bardia} alt="Rahnama Logo" />
      </div>
      <div className="flex items-center justify-center py-8 gap-4">
        <Typography variant="h3">بازیابی رمز عبور</Typography>
      </div>
      <div>
        <Typography variant="paragraph" className="text-center font-light">
          لطفاً نام‌ کاربری یا ایمیل خودتون رو وارد کنید:
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div>
            <TextField
              control={control}
              name="usernameOrEmail"
              type="text"
              placeholder="نام کاربری یا ایمیل"
              prefixIcon={<FaUser className="text-gray-400" />}
              error={errors.usernameOrEmail?.message}
            />
          </div>
          <div className="flex justify-between gap-4 text-left mt-8">
            <Button onClick={()=>navigate("/login")}>انصراف</Button>
            <Button primary type="submit" disabled={mutation.isLoading}>
              {mutation.isLoading ? "در حال ارسال..." : "ارسال لینک بازیابی رمز عبور"}
            </Button>
          </div>
        </form>
      </div>
    </Box>
  );
};

export default ForgetPassword;
