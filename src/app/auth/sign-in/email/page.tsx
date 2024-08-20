"use client";

import { login } from "@component/services/auth";
import TextInput from "../../sign-up/_components/TextInput";
import SigninContainer from "../_components/siginContainer";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Notification from "@component/components/common/notification";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoading } from "@component/contexts/loadingContext";

import { signIn } from "next-auth/react";
type FormData = {
    email: string;
    password: string;
};
const Email = () => {
    const router = useRouter();
    const { setIsLoading } = useLoading();

    const schema = yup
        .object({
            email: yup.string().email("Invalid email").required("Email is required"),
            password: yup.string().required("Password is required"),
        })
        .required();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handlNextAuth = async (data: any) => {
        const res = await signIn("credentials", {
            redirect: false,
            email: data.email,
            password: data.password,
        });

        console.log(res)
        if (res?.error) {
            Notification({
                type: "error",
                message: res?.error,
                placement: "top",
            });
            return
        }

        if (res?.ok) {
            Notification({
                type: "success",
                message: "Sign in successfully!",
                placement: "top",
            });
            router.push("/");
        }
    };

    return (
        <SigninContainer>
            <form onSubmit={handleSubmit(handlNextAuth)} className="signin-email">
                {errors && <p className="error">{errors.email?.message || errors.password?.message}</p>}
                <div className="signin-email-content">
                    <TextInput
                        name="email"
                        label="Email address"
                        type="email"
                        placeholder="Email address"
                        register={register}
                    />
                    {/* <p>Email address</p>
                    <input type="email" /> */}
                </div>
                <div className="signin-email-content">
                    <TextInput
                        register={register}
                        name="password"
                        label="Password"
                        type="password"
                        placeholder="Enter Password"
                    />
                    {/* <p>Email address</p>
                    <input type="email" /> */}
                </div>

                <div className="signin-email-content">
                    <button type="submit">Sign in</button>
                </div>
            </form>
        </SigninContainer>
    );
};

export default Email;
