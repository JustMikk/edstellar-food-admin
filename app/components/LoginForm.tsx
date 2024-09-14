"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [formValues, setFormValues] = useState<LoginFormValues>({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      passsword: "",
    },
  });

  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();

  //   // Handle form submission logic here
  // };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat px-2"
      style={{ backgroundImage: `url(/assets/images/background.jpg)` }}
    >
      <form
        // onSubmit={handleSubmit}
        className="w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto p-4 bg-white/10 rounded-xl shadow-lg shadow-green-400/30 border-[1px] border-[#444242]"
      >
        <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image
              className="mx-auto h-20 w-auto"
              src="/assets/images/logo.png"
              alt="edstellar logo"
              width={200}
              height={200}
            />
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Sign in
            </h2>
          </div>

          <div className="mt-4  sm:mx-auto sm:w-full sm:max-w-lg">
            <div className="space-y-5">
              <div className="w-full">
                <Label className="block text-sm font-medium leading-6 text-white">
                  Email address
                </Label>
                <div className="mt-2">
                  <Input placeholder="Email address" type="email" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <Label className="block text-sm font-medium leading-6 text-white">
                    Password
                  </Label>
                </div>
                <div>
                  <Input placeholder="Password" type="password" required />
                </div>
              </div>

              <div className="pt-12 w-full">
                <Button
                  className="w-full"
                  onClick={() => console.log("clicked")}
                >
                  Sign in
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
