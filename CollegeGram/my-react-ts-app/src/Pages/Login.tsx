import React from 'react';
import Box from '../Componenets/Box/Box';
import TextField from '../Componenets/Fields/TextField/TextField';
import Button from '../Componenets/Button/Button';
import Typography from '../Componenets/Typography/Typography';
import useMediaQuery from '../hook/useMediaQuery';
import { FaUser, FaLock } from 'react-icons/fa';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  usernameOrEmail: z.string().nonempty('نام کاربری یا ایمیل مورد نیاز است'),
  password: z.string().nonempty('رمز عبور مورد نیاز است'),
});

type FormValues = {
  usernameOrEmail: string;
  password: string;
};

const Login: React.FC = () => {
  const device = useMediaQuery();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <Box
      width="w-2/4"
      padding="py-8 px-12"
      className={`flex items-center justify-center ${
        device === 'phone'
          ? 'w-full h-screen items-start justify-between rounded-none py-32'
          : 'max-w-[450px]'
      }`}
    >
      <div className="text-center">
logo      </div>
      <div className="flex items-center justify-center py-8 gap-4">
        <Typography variant="h3">ثبت نام</Typography>
        <div>|</div>
        <Typography variant="h3">ورود</Typography>
      </div>
      <div className="">
        <Typography variant="paragraph" className="text-right font-light">
          به کالج‌گرام خوش آمدید. برای ورود کافیه نام کاربری/ایمیل و رمز عبور
          خود‌تون رو وارد کنید
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div>
            <TextField
              {...register('usernameOrEmail')}
              prefixIcon={<FaUser className="text-gray-400" />}
              placeholder="نام کاربری یا ایمیل"
              type="text"
              error={errors.usernameOrEmail}
            />
          </div>
          <div className="mt-4">
            <TextField
              {...register('password')}
              prefixIcon={<FaLock className="text-gray-400" />}
              placeholder="رمز عبور"
              type="password"
              error={errors.password}
            />
          </div>
          <Typography variant="paragraph" className="text-right mt-4 font-light">
            من را به خاطر بسپار
          </Typography>
          <div className="text-left mt-4">
            <Button primary type="submit">
              ورود
            </Button>
          </div>
        </form>
      </div>
      <div className="text-right mt-6">
        <Typography
          color="text-secondary"
          variant="paragraph"
          className="text-right mt-4 font-light"
        >
          فراموشی رمز عبور
        </Typography>
        <Typography
          color="text-secondary"
          variant="paragraph"
          className="text-right font-light"
        >
          ثبت نام در کالج‌گرام
        </Typography>
      </div>
    </Box>
  );
};

export default Login;
