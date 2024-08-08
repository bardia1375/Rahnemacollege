import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useMediaQuery from "../hook/useMediaQuery";
import { FaLock } from "react-icons/fa";
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
import { useEffect } from "react";
import serverApi from "../api/baseUrl";

// Validation schema
const schema = z
  .object({
    newPassword: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
    confirmPassword: z
      .string()
      .min(6, "تأیید رمز عبور باید حداقل ۶ کاراکتر باشد"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "رمز عبور و تأیید آن باید مطابقت داشته باشند",
    path: ["confirmPassword"],
  });

type FormValues = {
  newPassword: string;
  confirmPassword: string;
};

const SetNewPassword: React.FC = () => {
  const device = useMediaQuery();
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  // Define the mutation for setting new password
  const mutation = useMutation(
    (data: FormValues) =>
      serverApi.post("/api/set-new-password", { ...data, token }),
    {
      onSuccess: () => {
        navigate("/login");
      },
      onError: (error) => {
        console.error("Error setting new password", error);
      },
    }
  );

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    mutation.mutate(data);
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <Box
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
        <Typography variant="h3">تنظیم رمز عبور جدید</Typography>
      </div>
      <div>
        <Typography variant="paragraph" className="text-center font-light">
          لطفاً رمز جدیدی برای حساب خود انتخاب کنید:
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div className="mt-4">
            <TextField
              control={control}
              name="newPassword"
              type="password"
              placeholder="رمز عبور جدید"
              prefixIcon={<FaLock className="text-gray-400" />}
              error={errors.newPassword?.message}
            />
          </div>
          <div className="mt-4">
            <TextField
              control={control}
              name="confirmPassword"
              type="password"
              placeholder="تأیید رمز عبور"
              prefixIcon={<FaLock className="text-gray-400" />}
              error={errors.confirmPassword?.message}
            />
          </div>
          <div className="text-left mt-8">
            <Button primary type="submit" disabled={mutation.isLoading}>
              {mutation.isLoading ? "در حال ثبت..." : "ثبت رمز عبور جدید"}
            </Button>
          </div>
        </form>
      </div>
    </Box>
  );
};

export default SetNewPassword;
