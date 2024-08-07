"use client";
import { IconLeft } from "@component/constants/Icon";
import { useRouter, useSearchParams } from "next/navigation";
import EmailSignUpForm from "./_components/EmailSignUpForm";
import FormLayout from "./_components/FormLayout";
import SignUpForm from "./_components/SignUpForm";

type Props = {};

const SignUp = (props: Props) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const isEmail = searchParams.get("isEmail");
    return (
        <div className="content">
            <div className="sign-in_navigation" onClick={() => router.push("/")}>
                <IconLeft /> Return to GPGPU
            </div>

            <FormLayout>{isEmail ? <EmailSignUpForm /> : <SignUpForm />}</FormLayout>
        </div>
    );
};

export default SignUp;
