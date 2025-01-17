"use client";
import { IconLeft } from "@component/constants/Icon";
import EmailSignUpForm from "./_components/EmailSignUpForm";
import SignUpForm from "./_components/SignUpForm";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import FormLayout from "./_components/FormLayout";
type Props = {};

const Page = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const isEmail = searchParams.get("isEmail");

    return (
        <Suspense>
            <div className="content">
                <div className="sign-in_navigation" onClick={() => router.push("/")}>
                    <IconLeft /> Return to GPGPU
                </div>

                <FormLayout>{isEmail ? <EmailSignUpForm /> : <SignUpForm />}</FormLayout>
            </div>
        </Suspense>
    );
};

export default Page;
