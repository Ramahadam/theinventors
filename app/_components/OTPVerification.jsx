'use client';
import { useState, useEffect } from 'react';
import Button from './Button';

const OTPVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value !== '' && index < 3) {
      const nextInput = document.querySelector(`input[name=otp-${index + 1}]`);
      nextInput?.focus();
    }
  };

  const handleResendOTP = () => {
    setTimer(30);
    // Add your resend OTP logic here
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto ">
      <p className="text-p-sm leading-[30px] mb-[6rem] font-light">
        We Will send you a one time password on this{' '}
        <span className="font-normal">Mobile Number</span>
      </p>

      <p className="text-p-sm font-medium mb-8">+91 - 12989200823</p>

      {/* OTP Input Fields */}
      <div className="flex gap-4 mb-6">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            name={`otp-${index}`}
            maxLength={1}
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            className="w-14 h-14 border-[1px] border-black text-center text-2xl  rounded-lg focus:border-blue-500 focus:outline-none"
          />
        ))}
      </div>

      {/* Timer */}
      <p className="mb-4">
        {String(Math.floor(timer / 60)).padStart(2, '0')}:
        {String(timer % 60).padStart(2, '0')}
      </p>

      {/* Resend OTP */}
      <p className="mb-8 flex items-center">
        Didn't get an OTP?
        <Button
          onClick={handleResendOTP}
          className="!text-color-dark-slate ml-1 bg-transparent !p-0"
          disabled={timer > 0}
        >
          send again
        </Button>
      </p>
    </div>
  );
};

export default OTPVerification;
