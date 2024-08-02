import { Metadata } from "next";
import DefaultLayout from "@/components/layout/DefaultLayout";
import React from "react";
import Body from "@/components/body/Body";

export const metadata: Metadata = {
  title: "Next.js Form",
  description:
    "This is Next.js form page ",
};

const FormPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Body />
    </DefaultLayout>
  );
};

export default FormPage;